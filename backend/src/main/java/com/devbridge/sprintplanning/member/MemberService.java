package com.devbridge.sprintplanning.member;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.devbridge.sprintplanning.plan.Plan;
import com.devbridge.sprintplanning.plan.PlanService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.FilterChain;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Service
@Transactional
@Slf4j
public class MemberService implements UserDetailsService {

  private final MemberRepository memberRepository;
  private final PlanService planService;
  private final BCryptPasswordEncoder passwordEncoder;
  private final AuthenticationManager authenticationManager;

  public MemberService(MemberRepository memberRepository, PlanService planService, BCryptPasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
    this.memberRepository = memberRepository;
    this.planService = planService;
    this.passwordEncoder = passwordEncoder;
    this.authenticationManager = authenticationManager;
  }

  public Member createNewMember(Member member) {
    member.setIsDeleted(false);
    member.setCreationDate(LocalDateTime.now());
    member.setPassword(passwordEncoder.encode(member.getPassword()));
    memberRepository.save(member);
    return member;
  }

  public Member updateMember(Member member) {
    memberRepository.update(member);
    return member;
  }

  public Member findMemberById(Long id) {
    return memberRepository.findById(id);
  }

  public List<Member> findMembersByTeamId(Long teamId) {
    return memberRepository.findByTeamId(teamId);
  }

  public Member findMemberByAccessToken(String accessToken) {
    return memberRepository.findByAccessToken(accessToken);
  }

  public List<Member> findMemberByTeamIdForSprint(Long sprintId) {
    List<Member> memberList = memberRepository.findByTeamIdAndIfMemberIsInSprint(sprintId);
    for (Member member:
            memberList) {
        List<Plan> plans = planService.findPlansBySprintIdWithAllocations(sprintId, member.getId());
        member.setPlans(plans);
    }
    return memberList;
  }

  public void deleteMemberById(Long memberId) {
    memberRepository.deleteById(memberId);
  }

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    Member member = memberRepository.findByEmail(email);
    if (member == null) {
      throw new UsernameNotFoundException("Member not found in database");
    }
    Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
    return new User(member.getEmail(), member.getPassword(), authorities);
  }

  public void authenticate(MemberLogin memberLogin, HttpServletRequest request,
                           HttpServletResponse response) throws IOException {
    String username = memberLogin.getEmail();
    String password = memberLogin.getPassword();
    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
    Authentication authentication = authenticationManager.authenticate(authenticationToken);
    successfulAuthentication(request,response,authentication,memberLogin);
  }

  protected void successfulAuthentication(HttpServletRequest request,
                                          HttpServletResponse response,
                                          Authentication authentication,
                                          MemberLogin memberLogin) throws IOException {
    org.springframework.security.core.userdetails.User user = (org.springframework.security.core.userdetails.User)authentication.getPrincipal();
    Algorithm algorithm = Algorithm.HMAC256("Secret".getBytes());
    String access_token = JWT.create()
            .withSubject(memberLogin.getEmail())
            .withExpiresAt(new Date(System.currentTimeMillis() +10 * 60 * 1000))
            .withIssuer(request.getRequestURL().toString())
            .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
            .sign(algorithm);

    String refresh_token = JWT.create()
            .withSubject(memberLogin.getEmail())
            .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 1000))
            .withIssuer(request.getRequestURL().toString())
            .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
            .sign(algorithm);

    Member getMemberByEmail = memberRepository.findByEmail(memberLogin.getEmail());
    getMemberByEmail.setAccessToken(access_token);
    getMemberByEmail.setRefreshToken(refresh_token);
    memberRepository.update(getMemberByEmail);
    Map<String, String> tokens = new HashMap<>();
      tokens.put("access_token", access_token);
      tokens.put("refresh_token", refresh_token);
      tokens.put("status", "OK");
    response.setContentType(APPLICATION_JSON_VALUE);
    new ObjectMapper().writeValue(response.getOutputStream(), tokens);
  }
}

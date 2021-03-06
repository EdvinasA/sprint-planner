package com.devbridge.sprintplanning.member;

import com.devbridge.sprintplanning.memberTeam.MemberTeamListDisplay;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "member")
public class MemberController {

  private final MemberService memberService;

  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  @PostMapping("/login")
  public void loginMember(@RequestBody MemberLogin memberLogin,
                                       HttpServletRequest request,
                                       HttpServletResponse response) throws IOException {
    memberService.authenticate(memberLogin, request, response);
  }

  @PostMapping("/register")
  public void registerAndLoginMember(@RequestBody MemberRegister memberRegister,
                          HttpServletRequest request,
                          HttpServletResponse response) throws IOException {
    memberService.createNewMember(memberRegister);
    MemberLogin memberLogin = new MemberLogin();
    memberLogin.setEmail(memberRegister.getEmail());
    memberLogin.setPassword(memberRegister.getPassword());
    memberService.authenticate(memberLogin, request, response);
  }


  @DeleteMapping("{memberId}")
  public void deleteMembersById(@PathVariable String memberId) {
    memberService.deleteMemberById(Long.parseLong(memberId));
  }

  @GetMapping("/{accessToken}")
  public Member getMemberByAccessToken(@PathVariable String accessToken) {
    return memberService.findMemberByAccessToken(accessToken);
  }

  @PutMapping
  public Member updateMember(@RequestBody Member member) {
    return memberService.updateMember(member);
  }
}

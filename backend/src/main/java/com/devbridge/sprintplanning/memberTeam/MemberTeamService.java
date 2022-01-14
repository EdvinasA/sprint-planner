package com.devbridge.sprintplanning.memberTeam;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.member.MemberService;
import com.devbridge.sprintplanning.member.RoleType;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class MemberTeamService {

  private final MemberService memberService;
  private final MemberTeamRepository memberTeamRepository;

  public MemberTeamService(MemberService memberService, MemberTeamRepository memberTeamRepository) {
    this.memberService = memberService;
    this.memberTeamRepository = memberTeamRepository;
  }

  public MemberTeam createTeam(MemberTeam memberTeam) {
    memberTeam.setCreationDate(LocalDateTime.now());
    memberTeamRepository.save(memberTeam);
    return memberTeam;
  }

  public MemberTeam createTeamAndAddMemberThatCreated(String memberTeamName, String accessToken) {
    MemberTeam memberTeam = new MemberTeam();
    memberTeam.setCreationDate(LocalDateTime.now());
    memberTeam.setTeamName(memberTeamName);
    memberTeamRepository.save(memberTeam);
    setMemberToTeamAndUpdateMemberInDatabase(accessToken, memberTeam);
    return getTeamByMemberAccessToken(accessToken);
  }

  private void setMemberToTeamAndUpdateMemberInDatabase(String accessToken, MemberTeam memberTeam) {
    Member member = memberService.findMemberByAccessToken(accessToken);
    member.getMemberTeamId().add(memberTeam.getId());
    memberService.updateMember(member);
  }

  public MemberTeam getTeamByMemberAccessToken(String accessToken) {
    Member member = memberService.findMemberByAccessToken(accessToken);
    MemberTeam memberTeam = memberTeamRepository.findTeamById(1L);
    memberTeam.setMembersList(memberService.findMembersByTeamId(1L));
    return memberTeam;
  }

  public List<MemberTeamListDisplay> getTeamListByMemberAccessToken(String accessToken) {
    List<MemberTeamListDisplay> memberTeamListDisplayList = new ArrayList<>();
//    List<Long> listOfMemberTeamIds = memberRepository.findMemberTeamIdsByAccessToken(accessToken);
//    for (Long id:
//            listOfMemberTeamIds) {
//      MemberTeamListDisplay memberTeamListDisplay = new MemberTeamListDisplay();
//      memberTeamListDisplay.setId(id);
//      memberTeamListDisplay.setTeamName(memberTeamService.getTeamById(id).getTeamName());
//    }
    return memberTeamListDisplayList;
  }

  public MemberTeam getTeamById(Long id) {
    return memberTeamRepository.findTeamById(id);
  }

  public void deleteMemberFromTeamByMemberId(Long memberId) {
    Member member = memberService.findMemberById(memberId);
    member.setIsDeleted(true);
    memberService.updateMember(member);
  }

  public Member updateMemberRoleInTeam(Long memberId, RoleType role) {
    Member member = memberService.findMemberById(memberId);
    member.setRole(role);
    return memberService.updateMember(member);
  }
}

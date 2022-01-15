package com.devbridge.sprintplanning.memberTeam;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.member.MemberService;
import com.devbridge.sprintplanning.member.RoleType;
import com.devbridge.sprintplanning.memberTeamList.MemberTeamListService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class MemberTeamService {

  private final MemberService memberService;
  private final MemberTeamRepository memberTeamRepository;
  private final MemberTeamListService memberTeamListService;

  public MemberTeamService(MemberService memberService, MemberTeamRepository memberTeamRepository, MemberTeamListService memberTeamListService) {
    this.memberService = memberService;
    this.memberTeamRepository = memberTeamRepository;
    this.memberTeamListService = memberTeamListService;
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
    addMemberTeamToListInDatabase(accessToken, memberTeam);
    return getTeamByMemberAccessToken(memberTeam.getId());
  }

  private void addMemberTeamToListInDatabase(String accessToken, MemberTeam memberTeam) {
    Member member = memberService.findMemberByAccessToken(accessToken);
    memberTeamListService.createNewEntry(member.getId(), memberTeam.getId());
  }

  public MemberTeam getTeamByMemberAccessToken(Long teamId) {
    MemberTeam memberTeam = memberTeamRepository.findTeamById(teamId);
    memberTeam.setMembersList(memberService.findMembersByTeamId(teamId));
    return memberTeam;
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

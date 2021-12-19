package com.devbridge.sprintplanning.memberTeam;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.member.MemberService;
import com.devbridge.sprintplanning.member.RoleType;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

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

  public MemberTeam getTeamById(Long id) {
    MemberTeam memberTeam = memberTeamRepository.findTeamById(id);
    memberTeam.setMembersList(memberService.findMembersByTeamId(id));
    return memberTeam;
  }

  public Member insertMemberIntoTeam(Member member) {
    return memberService.createNewMember(member);
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

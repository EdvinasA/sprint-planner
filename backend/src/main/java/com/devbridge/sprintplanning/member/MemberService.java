package com.devbridge.sprintplanning.member;

import com.devbridge.sprintplanning.plan.PlanService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MemberService {

  private final MemberRepository memberRepository;
  private final PlanService planService;

  public MemberService(MemberRepository memberRepository, PlanService planService) {
    this.memberRepository = memberRepository;
    this.planService = planService;
  }

  public Member createNewMember(Member member) {
    member.setIsDeleted(false);
    member.setCreationDate(LocalDateTime.now());
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

  public List<Member> findMemberByTeamIdForSprint(Long teamId, Long sprintId) {
    List<Member> memberList = memberRepository.findByTeamId(teamId);
    System.out.println(memberList);
    for (int i = 1; i < memberList.size()+1; i++){
      memberList.get(i).setPlans(planService.findPlansBySprintIdWithAllocations(sprintId, memberList.get(i).getId()));
      System.out.println(memberList);
    }
    return memberList;
  }

  public void deleteMemberById(Long memberId) {
    memberRepository.deleteById(memberId);
  }

}

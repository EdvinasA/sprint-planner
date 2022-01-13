package com.devbridge.sprintplanning.memberSprint;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MemberSprintService {

  private final MemberSprintRepository memberSprintRepository;

  public MemberSprintService(MemberSprintRepository memberSprintRepository) {
    this.memberSprintRepository = memberSprintRepository;
  }

  public MemberSprint createEntry(Long sprintId, Long memberId, Boolean isInSprint) {
    MemberSprint memberSprint = new MemberSprint();
    memberSprint.setSprintId(sprintId);
    memberSprint.setMemberId(memberId);
    memberSprint.setCreationDate(LocalDateTime.now());
    memberSprint.setIsInSprint(isInSprint);
    memberSprintRepository.save(memberSprint);
    return memberSprint;
  }

}

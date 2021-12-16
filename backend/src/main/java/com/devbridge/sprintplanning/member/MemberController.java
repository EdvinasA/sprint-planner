package com.devbridge.sprintplanning.member;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(value = "member")
public class MemberController {

  private final MemberService memberService;

  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  @DeleteMapping("{memberId}")
  public void deleteMembersById(@PathVariable String memberId) {
    memberService.deleteMemberById(Long.parseLong(memberId));
  }

  @PostMapping
  public Member createNewMember(@RequestBody Member member) {
    return memberService.createNewMember(member);
  }

  @PutMapping
  public Member updateMember(@RequestBody Member member) {
    return memberService.updateMember(member);
  }
}

package com.devbridge.sprintplanning.member;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

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

  @DeleteMapping("{memberId}")
  public void deleteMembersById(@PathVariable String memberId) {
    memberService.deleteMemberById(Long.parseLong(memberId));
  }

  @GetMapping("/{accessToken}")
  public Member getMemberByAccessToken(@PathVariable String accessToken) {
    return memberService.findMemberByAccessToken(accessToken);
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

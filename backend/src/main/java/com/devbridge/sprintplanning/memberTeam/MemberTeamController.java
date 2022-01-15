package com.devbridge.sprintplanning.memberTeam;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.member.RoleType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(value = "member-team")
public class MemberTeamController {

  private final MemberTeamService memberTeamService;

  public MemberTeamController(MemberTeamService memberTeamService) {
    this.memberTeamService = memberTeamService;
  }

  @GetMapping("{teamId}")
  public MemberTeam getTeamWithAllMembersByTeamId(@PathVariable String teamId) {
    return memberTeamService.getTeamByMemberAccessToken(Long.parseLong(teamId));
  }

  @PostMapping("{memberTeamName}/{accessToken}")
  public MemberTeam createTeamAndGetWithAllMembersByTeamId(@PathVariable String memberTeamName, @PathVariable String accessToken) {
    if (accessToken == null || accessToken.equals("undefined")) {
      return null;
    }
    return memberTeamService.createTeamAndAddMemberThatCreated(memberTeamName, accessToken);
  }

  @PostMapping("/new")
  public MemberTeam createNewTeam(@RequestBody MemberTeam memberTeam) {
    return memberTeamService.createTeam(memberTeam);
  }

  @PutMapping("delete/{memberId}")
  public void deleteMemberFromTeamByMemberId(@PathVariable String memberId) {
    memberTeamService.deleteMemberFromTeamByMemberId(Long.parseLong(memberId));
  }

  @PutMapping("update-role/{memberId}/{role}")
  public Member updateMemberRole(@PathVariable String memberId,@PathVariable String role) {
    return memberTeamService.updateMemberRoleInTeam(Long.parseLong(memberId), RoleType.valueOf(role));
  }
}

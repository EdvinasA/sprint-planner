package com.devbridge.sprintplanning.member;

import java.time.LocalDateTime;
import java.util.List;

import com.devbridge.sprintplanning.memberTeamList.MemberTeamListDisplay;
import com.devbridge.sprintplanning.plan.Plan;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {

  private Long id;

  private RoleType role;

  private String fullName;

  private String email;

  private String password;

  private List<MemberTeamListDisplay> memberTeamListDisplays;

  private List<Plan> plans;

  private String accessToken;

  private String refreshToken;

  private LocalDateTime creationDate;

}

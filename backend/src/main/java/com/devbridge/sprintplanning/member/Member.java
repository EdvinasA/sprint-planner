package com.devbridge.sprintplanning.member;

import java.time.LocalDateTime;
import java.util.List;

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

  private Long memberTeamId;

  private Boolean isDeleted;

  private List<Plan> plans;

  private LocalDateTime creationDate;

}

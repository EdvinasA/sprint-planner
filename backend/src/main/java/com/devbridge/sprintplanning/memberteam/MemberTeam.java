package com.devbridge.sprintplanning.memberteam;

import java.time.LocalDateTime;
import java.util.List;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.sprint.Sprint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberTeam {

  private Long id;

  private String teamName;

  private List<Member> membersList;

  private List<Sprint> sprintsList;

  private LocalDateTime creationDate;

}

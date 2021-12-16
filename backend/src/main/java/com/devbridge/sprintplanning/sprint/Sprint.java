package com.devbridge.sprintplanning.sprint;

import java.time.LocalDate;
import java.util.List;
import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.task.Task;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sprint {
  private Long id;

  private String title;

  private LocalDate startDate;

  private LocalDate endDate;

  private Long memberTeamId;

  private Boolean isHistorical;

  private Boolean isActive;

  private List<Member> membersList;

  private List<Task> tasks;

  private LocalDateTime creationDate;

}

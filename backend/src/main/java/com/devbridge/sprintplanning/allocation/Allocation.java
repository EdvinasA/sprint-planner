package com.devbridge.sprintplanning.allocation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Allocation {

  private Long id;

  private Long memberId;

  private LocalDate dayOfSprint;

  private Long planId;

  private Long taskId;

  private LocalDateTime creationDate;

}

package com.devbridge.sprintplanning.plan;

import com.devbridge.sprintplanning.allocation.Allocation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plan {

  private Long id;

  private Long sprintId;

  private Long memberId;

  private List<Allocation> allocations;

  private PlanType planType;

  private LocalDateTime creationDate;

}

package com.devbridge.sprintplanning.task;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {

  private Long id;

  private String key;

  private String description;

  private String taskType;

  private Integer oldPoints;

  private Integer remainingPoints;

  private Integer newPoints;

  private LocalDateTime creationDate;

  private String buttonColor;

  private Boolean show;

  private Long sprintId;

}

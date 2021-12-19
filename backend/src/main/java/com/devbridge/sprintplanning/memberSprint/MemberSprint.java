package com.devbridge.sprintplanning.memberSprint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberSprint {

    private Long id;

    private Long memberId;

    private Long sprintId;

    private Boolean isInSprint;

    private LocalDateTime creationDate;
}

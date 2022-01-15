package com.devbridge.sprintplanning.memberTeamList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberTeamList {

    private Long id;

    private Long memberId;

    private Long memberTeamId;

    private LocalDateTime creationDate;
}

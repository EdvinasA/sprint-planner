package com.devbridge.sprintplanning.memberTeamList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberTeamListDisplay {

    private Long id;
    private Long MemberTeamId;
    private String teamName;
    private Boolean isDeleted;

}

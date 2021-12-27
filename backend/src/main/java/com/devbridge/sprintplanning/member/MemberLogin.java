package com.devbridge.sprintplanning.member;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberLogin {

    private String email;
    private String password;
}

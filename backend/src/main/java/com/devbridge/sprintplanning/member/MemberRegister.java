package com.devbridge.sprintplanning.member;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberRegister {

    private String fullName;
    private String email;
    private String password;

}


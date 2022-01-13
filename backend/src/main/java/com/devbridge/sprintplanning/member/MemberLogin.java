package com.devbridge.sprintplanning.member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberLogin {

  private String email;
  private String password;

}

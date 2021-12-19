package com.devbridge.sprintplanning.memberTeam;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface MemberTeamRepository {
  @Insert("INSERT INTO member_team(team_name, creation_date)"
    + " VALUES (#{memberTeam.teamName},"
    + "#{memberTeam.creationDate})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("memberTeam") MemberTeam memberTeam);

  @Select("SELECT * FROM member_team WHERE id=#{id}")
  MemberTeam findTeamById(@Param("id") Long id);
}

package com.devbridge.sprintplanning.memberTeamList;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MemberTeamListRepository {

    @Insert("INSERT INTO member_team_list(member_id, member_team_id, creation_date)"
            + " VALUES (#{memberTeamList.memberId}, #{memberTeamList.memberTeamId},"
            + "#{memberTeam.creationDate})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void save(@Param("memberTeamList") MemberTeamList memberTeamList);

    @Select("SELECT * FROM member_team_list WHERE member_id=#{memberId}")
    List<MemberTeamList> getAllMemberTeamListsByMemberId(@Param("memberId") Long memberId);

}

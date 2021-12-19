package com.devbridge.sprintplanning.memberSprint;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Mapper
public interface MemberSprintRepository {

    @Insert("INSERT INTO member_sprint (member_id, sprint_id, is_in_sprint, creation_date)"
            + " VALUES (#{memberSprint.memberId}, #{memberSprint.sprintId}, #{memberSprint.isInSprint}, "
            + "#{memberSprint.creationDate})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void save(@Param("memberSprint") MemberSprint memberSprint);

    @Select("SELECT * FROM member_sprint WHERE member_id=#{memberId} AND sprint_id=#{sprintId}")
    Optional<MemberSprint> findMemberSprintEntry(@Param("memberId") Long memberId, @Param("sprintId") Long sprintId);
}

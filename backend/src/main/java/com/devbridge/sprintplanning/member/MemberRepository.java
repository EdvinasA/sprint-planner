package com.devbridge.sprintplanning.member;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MemberRepository {
  @Insert("INSERT INTO member (role, full_name, email, password, creation_date)"
          + " VALUES (#{member.role}, #{member.fullName}, "
          + "#{member.email}, #{member.password}, #{member.creationDate})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("member") Member member);

  @Update("UPDATE member SET email=#{member.email}, password=#{member.password},"
          + " access_token=#{member.accessToken}, refresh_token=#{member.refreshToken}, role=#{member.role},"
          + "full_name=#{member.fullName}, creation_date=#{member.creationDate} "
          + "WHERE id=#{member.id}")
  void update(@Param("member") Member member);

  @Delete("DELETE FROM member WHERE id=#{id}")
  void deleteById(@Param("id") Long id);

  @Select("SELECT * FROM member WHERE id=#{id}")
  Member findById(@Param("id") Long id);

  @Select("SELECT member.id, member.id, " +
          "member.role, member.full_name, " +
          "member.email, member.password, " +
          "member.access_token, member.refresh_token, " +
          "member.creation_date " +
          "FROM member " +
          "INNER JOIN member_team_list mtl " +
          "ON member.id = mtl.member_id " +
          "WHERE mtl.member_team_id=1 ORDER BY id ASC")
  List<Member> findByTeamId(@Param("id") Long id);

  @Select("SELECT m.id, m.role, m.full_name, m.member_team_id, m.is_deleted, m.creation_date FROM member m "
          + "INNER JOIN member_sprint ms ON m.id = ms.member_id WHERE ms.sprint_id=#{sprintId}")
  List<Member> findByTeamIdAndIfMemberIsInSprint(@Param("sprintId") Long sprintId);

  @Select("SELECT * FROM member WHERE email=#{email}")
  Member findByEmail(@Param("email") String email);

  @Select("SELECT * FROM member WHERE access_token=#{accessToken}")
  Member findByAccessToken(@Param("accessToken") String accessToken);

}

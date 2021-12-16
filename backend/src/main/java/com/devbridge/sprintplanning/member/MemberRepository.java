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
  @Insert("INSERT INTO member (role, full_name, member_team_id, is_deleted, creation_date)"
          + " VALUES (#{member.role}, #{member.fullName}, #{member.memberTeamId}, "
          + "#{member.isDeleted}, #{member.creationDate})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("member") Member member);

  @Update("UPDATE member SET role=#{member.role},"
          + "full_name=#{member.fullName}, creation_date=#{member.creationDate}, "
          + "member_team_id=#{member.memberTeamId}, "
          + "is_deleted=#{member.isDeleted}"
          + "WHERE id=#{member.id}")
  void update(@Param("member") Member member);

  @Delete("DELETE FROM member WHERE id=#{id}")
  void deleteById(@Param("id") Long id);

  @Select("SELECT * FROM member WHERE id=#{id}")
  Member findById(@Param("id") Long id);

  @Select("SELECT * FROM member WHERE member_team_id=#{id} AND is_deleted=false ORDER BY id ASC")
  List<Member> findByTeamId(@Param("id") Long id);
}

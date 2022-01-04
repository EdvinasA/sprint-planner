package com.devbridge.sprintplanning.sprint;

import java.time.LocalDate;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface SprintRepository {
  @Insert("INSERT INTO sprint (title, start_date, end_date, member_team_id, is_active, is_historical, creation_date)"
    + " VALUES (#{sprint.title}, #{sprint.startDate}, #{sprint.endDate}, #{sprint.memberTeamId},"
         + " #{sprint.isActive}, #{sprint.isHistorical}, #{sprint.creationDate})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("sprint") Sprint sprint);

  @Select("SELECT * FROM sprint WHERE member_team_id = #{teamId}")
  List<LocalDate> getSprintDates(@Param("teamId") Long teamId);

  @Update("UPDATE sprint SET is_historical = true, is_active = false"
    + " WHERE id = #{sprintId}")
  void endSprint(@Param("sprintId") Long sprintId);

  @Select("SELECT * FROM sprint WHERE member_team_id = #{teamId}")
  List<Sprint> allSprintsByMemberTeamId(@Param("teamId") Long teamId);

  @Select("SELECT * FROM sprint WHERE id = #{id}")
  Sprint getSprintById(@Param("id") Long id);

  @Select("SELECT * FROM sprint WHERE member_team_id = #{id}")
  Sprint getActiveSprintByTeamId(@Param("id") Long id);

  @Select("SELECT * FROM sprint ORDER BY id ASC")
  List<Sprint> getAllSprints();

  @Update("UPDATE sprint SET title=#{sprint.title}, start_date=#{sprint.startDate}, "
    + " end_date=#{sprint.endDate}, is_active=#{sprint.isActive}, is_historical=#{sprint.isHistorical}"
    + " WHERE id=#{sprint.id}")
  void update(@Param("sprint") Sprint sprint);
}

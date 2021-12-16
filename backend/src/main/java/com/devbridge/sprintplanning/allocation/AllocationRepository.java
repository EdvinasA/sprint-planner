package com.devbridge.sprintplanning.allocation;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Options;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AllocationRepository {

  @Insert("INSERT INTO allocation(member_id, day_of_sprint, plan_id, task_id, creation_date )"
      + " VALUES (#{allocation.memberId}, #{allocation.dayOfSprint}, #{allocation.planId}, "
      + "#{allocation.taskId}, #{allocation.creationDate})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("allocation") Allocation allocation);

  @Select("SELECT * FROM allocation WHERE plan_id=#{planId} ORDER BY id ASC")
  List<Allocation> getAllocationsByPlanId(@Param("planId")Long planId);

  @Update("UPDATE allocation SET task_id=#{allocation.taskId} WHERE id=#{allocation.id}")
  void update(@Param("allocation") Allocation allocation);
}

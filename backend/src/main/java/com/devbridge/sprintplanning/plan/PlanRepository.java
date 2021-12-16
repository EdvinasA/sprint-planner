package com.devbridge.sprintplanning.plan;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Options;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PlanRepository {

  @Select("SELECT * FROM plan WHERE sprint_id=#{sprintId} AND member_id=#{memberId}")
  List<Plan> findPlansBySprintIdAndMemberId(@Param("sprintId") Long sprintId, @Param("memberId") Long memberId);

  @Insert("INSERT INTO plan (sprint_id, plan_type, member_id, creation_date)"
          + " VALUES (#{plan.sprintId}, #{plan.planType}, #{plan.memberId}, #{plan.creationDate})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("plan") Plan plan);

  @Delete("DELETE FROM plan WHERE id=#{id}")
  void deleteById(@Param("id") Long id);
}

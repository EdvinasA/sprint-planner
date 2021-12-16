package com.devbridge.sprintplanning.task;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Options;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Mapper
@Repository
public interface TaskRepository {

  @Insert("INSERT INTO task (sprint_id, key,"
          + "task_type, old_points, remaining_points, new_points, creation_date, description, button_color, show)"
          + " VALUES (#{task.sprintId}, #{task.key}, #{task.taskType}, "
          + "#{task.oldPoints}, #{task.remainingPoints}, #{task.newPoints}, #{task.creationDate}, "
          + "#{task.description}, #{task.buttonColor}, #{task.show})")
  @Options(useGeneratedKeys = true, keyProperty = "id")
  void save(@Param("task") Task task);

  @Update("UPDATE task SET sprint_id=#{task.sprintId}, "
          + "task_type=#{task.taskType},"
          + "old_points=#{task.oldPoints}, "
          + "remaining_points=#{task.remainingPoints}, new_points=#{task.newPoints}, description=#{task.description} "
          + "WHERE id=#{task.id}")
  void update(@Param("task") Task task);

  @Select("SELECT * FROM task")
  List<Task> findAll();

  @Select("SELECT * FROM task WHERE id=#{id}")
  Optional<Task> findById(@Param("id") Long id);

  @Select("SELECT * FROM task WHERE sprint_id=#{id}")
  List<Task> getAllBySprintId(@Param("id") Long id);

  @Delete("DELETE FROM task WHERE id=#{id}")
  void deleteById(@Param("id") Long id);
}

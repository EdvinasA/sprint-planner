package com.devbridge.sprintplanning.task;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(value = "task")
@AllArgsConstructor
public class TasksController {

  private final TaskService taskService;

  @GetMapping
  public List<Task> getAllTasks() {
    return taskService.getAllTasks();
  }

  @GetMapping(value = "{sprintId}")
  public List<Task> getAllTasksBySprintId(@PathVariable String sprintId) {
    return taskService.getAllTasksBySprintId(Long.parseLong(sprintId));
  }

  @DeleteMapping("{taskId}")
  public void deleteTasksById(@PathVariable String taskId) {
    taskService.deleteTaskById(Long.parseLong(taskId));
  }

  @PostMapping
  public Task createNewTask(@RequestBody Task task) {
    return taskService.createNewTask(task);
  }

  @PutMapping
  public Task updateTask(@RequestBody Task task) {
    return taskService.updateTask(task);
  }
}

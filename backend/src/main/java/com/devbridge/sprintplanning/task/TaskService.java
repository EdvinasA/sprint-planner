package com.devbridge.sprintplanning.task;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {

  private TaskRepository taskRepository;

  public Task createNewTask(Task task) {
    task.setCreationDate(LocalDateTime.now());
    taskRepository.save(task);
    return task;
  }

  public Task updateTask(Task task) {
    taskRepository.update(task);
    return task;
  }

  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public List<Task> getAllTasksBySprintId(Long sprintId) {
    return taskRepository.getAllBySprintId(sprintId);
  }

  public void deleteTaskById(Long taskId) {
    taskRepository.deleteById(taskId);
  }
}

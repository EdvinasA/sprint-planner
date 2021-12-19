package com.devbridge.sprintplanning.allocation;

import com.devbridge.sprintplanning.task.Task;
import com.devbridge.sprintplanning.task.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AllocationService {

  private final AllocationRepository allocationRepository;
  private final TaskRepository taskRepository;

  public AllocationService(AllocationRepository allocationRepository, TaskRepository taskRepository) {
    this.allocationRepository = allocationRepository;
    this.taskRepository = taskRepository;
  }

  @Transactional
  public Allocation createNewAllocation(Allocation allocation, Long lastInsertedPlanId, Map<Long, Long> oldAndNewIds) {
    allocation.setCreationDate(LocalDateTime.now());
    allocation.setPlanId(lastInsertedPlanId);
    oldAndNewIds.forEach((key, value) -> {
      if (allocation.getTaskId().equals(key)) {
        allocation.setTaskId(value);
      }
    });
    allocationRepository.save(allocation);
    return allocation;
  }

  public List<Allocation> listOfAllocationsByPlanId(Long planId) {
    return allocationRepository.getAllocationsByPlanId(planId);
  }

  public Allocation updateAllocation(Allocation allocation) {
    allocationRepository.update(allocation);
    return allocation;
  }

}

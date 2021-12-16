package com.devbridge.sprintplanning.allocation;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AllocationService {

  private final AllocationRepository allocationRepository;

  public AllocationService(AllocationRepository allocationRepository) {
    this.allocationRepository = allocationRepository;
  }

  public Allocation createNewAllocation(Allocation allocation, Long lastInsertedPlanId) {
    allocation.setCreationDate(LocalDateTime.now());
    allocation.setPlanId(lastInsertedPlanId);
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

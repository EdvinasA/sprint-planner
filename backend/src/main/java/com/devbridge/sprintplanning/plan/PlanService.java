package com.devbridge.sprintplanning.plan;

import com.devbridge.sprintplanning.allocation.Allocation;
import com.devbridge.sprintplanning.allocation.AllocationService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class PlanService {

  private final PlanRepository planRepository;
  private final AllocationService allocationService;

  public PlanService(PlanRepository planRepository, AllocationService allocationService) {
    this.planRepository = planRepository;
    this.allocationService = allocationService;
  }

  public List<Plan> createNewPlans(Plan plan) {
    List<Plan> listOfNewPlans = new ArrayList<>();
    listOfNewPlans.add(createPlanWithType(plan, PlanType.CURRENT));
    listOfNewPlans.add(createPlanWithType(plan, PlanType.INITIAL));
    return listOfNewPlans;
  }

  private Plan createPlanWithType(Plan plan, PlanType planType) {
    plan.setCreationDate(LocalDateTime.now());
    plan.setPlanType(planType);
    planRepository.save(plan);
    plan.setAllocations(allocationsFromDatabase(plan.getAllocations(), plan.getId()));
    return plan;
  }

  private List<Allocation> allocationsFromDatabase(List<Allocation> listOfAllocations, Long lastInsertedPlanId) {
    List<Allocation> newAllocationListFromDatabase = new ArrayList<>();
    for (Allocation allocation : listOfAllocations) {
      Allocation newAllocation = allocationService.createNewAllocation(allocation, lastInsertedPlanId);
      newAllocationListFromDatabase.add(newAllocation);
    }
    return newAllocationListFromDatabase;
  }

  public List<Plan> findPlansBySprintIdWithAllocations(Long sprintId, Long memberId) {
    List<Plan> arrayOfPlans = planRepository.findPlansBySprintIdAndMemberId(sprintId, memberId);
    for (Plan plan:
         arrayOfPlans) {
      plan.setAllocations(allocationService.listOfAllocationsByPlanId(plan.getId()));
    }
    return arrayOfPlans;
  }

  public void deletePlanById(Long taskId) {
    planRepository.deleteById(taskId);
  }

}

package com.devbridge.sprintplanning.plan;

import com.devbridge.sprintplanning.allocation.Allocation;
import com.devbridge.sprintplanning.allocation.AllocationService;
import com.devbridge.sprintplanning.task.Task;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PlanService {

  private final PlanRepository planRepository;
  private final AllocationService allocationService;

  public PlanService(PlanRepository planRepository, AllocationService allocationService) {
    this.planRepository = planRepository;
    this.allocationService = allocationService;
  }

  @Transactional
  public List<Plan> createNewPlans(Plan plan, Map<Long, Long> oldAndNewIds) {
    List<Plan> listOfNewPlans = new ArrayList<>();
    listOfNewPlans.add(createPlanWithType(plan, PlanType.CURRENT, oldAndNewIds));
    listOfNewPlans.add(createPlanWithType(plan, PlanType.INITIAL, oldAndNewIds));
    return listOfNewPlans;
  }

  @Transactional
  public Plan createPlanWithType(Plan plan, PlanType planType, Map<Long, Long> oldAndNewIds) {
    plan.setCreationDate(LocalDateTime.now());
    plan.setPlanType(planType);
    planRepository.save(plan);
    plan.setAllocations(allocationsFromDatabase(plan.getAllocations(), plan.getId(), oldAndNewIds));
    return plan;
  }

  @Transactional
  public List<Allocation> allocationsFromDatabase(List<Allocation> listOfAllocations,
                                                  Long lastInsertedPlanId,
                                                  Map<Long, Long> oldAndNewIds) {
    List<Allocation> newAllocationListFromDatabase = new ArrayList<>();
    for (Allocation allocation : listOfAllocations) {
      Allocation newAllocation = allocationService.createNewAllocation(allocation,
              lastInsertedPlanId,
              oldAndNewIds);
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

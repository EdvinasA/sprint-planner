package com.devbridge.sprintplanning.plan;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
@RequestMapping(value = "plan")
public class PlanController {

  private final PlanService planService;

  public PlanController(PlanService planService) {
    this.planService = planService;
  }

  @PostMapping
  public List<Plan> createNewPlans(@RequestBody Plan plan) {
    return planService.createNewPlans(plan);
  }

  @DeleteMapping("{id}")
  public void deletePlan(@PathVariable String id) {
    planService.deletePlanById(Long.parseLong(id));
  }
}

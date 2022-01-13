package com.devbridge.sprintplanning.plan;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping(value = "plan")
public class PlanController {

  private final PlanService planService;

  public PlanController(PlanService planService) {
    this.planService = planService;
  }

  @DeleteMapping("{id}")
  public void deletePlan(@PathVariable String id) {
    planService.deletePlanById(Long.parseLong(id));
  }
}

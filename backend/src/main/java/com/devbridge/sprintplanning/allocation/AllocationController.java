package com.devbridge.sprintplanning.allocation;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "allocation")
public class AllocationController {

  private final AllocationService allocationService;

  public AllocationController(AllocationService allocationService) {
    this.allocationService = allocationService;
  }

  @PutMapping
  public Allocation updateAllocation(@RequestBody Allocation allocation) {
    return allocationService.updateAllocation(allocation);
  }
}

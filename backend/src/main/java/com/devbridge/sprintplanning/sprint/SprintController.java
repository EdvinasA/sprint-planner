package com.devbridge.sprintplanning.sprint;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping(value = "sprint")
public class SprintController {
  private final SprintService sprintService;

  public SprintController(SprintService sprintService) {
    this.sprintService = sprintService;
  }

  @PutMapping("{sprintId}")
  public void endCurrentSprint(@PathVariable Long sprintId) {
    sprintService.endCurrentSprint(sprintId);
  }

  @PutMapping("start/{sprintId}")
  public void startCurrentSprint(@PathVariable Long sprintId) {
    sprintService.startSprint(sprintId);
  }

  @PostMapping
  public Sprint createNewSprint(@RequestBody Sprint sprint) {
    return sprintService.createNewSprint(sprint);
  }

  @GetMapping("{teamId}")
  public List<Sprint> getSprintsByTeamId(@PathVariable String teamId) {
    return sprintService.findSprintsByTeamId(Long.parseLong(teamId));
  }

  @GetMapping("active/{teamId}")
  public Sprint getActiveSprintByTeamId(@PathVariable String teamId) {
    return sprintService.getActiveSprintByTeamId(Long.parseLong(teamId));
  }

  @GetMapping("by-id/{id}")
  public Sprint getSprintById(@PathVariable String id) {
    if (id.equals("undefined")) {
      return null;
    }
    return sprintService.findSprintById(Long.parseLong(id));
  }

  @GetMapping
  public List<Sprint> getAllSprints() {
    return sprintService.getAllSprints();
  }

}

package com.devbridge.sprintplanning.sprint;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.member.MemberService;
import com.devbridge.sprintplanning.plan.Plan;
import com.devbridge.sprintplanning.plan.PlanService;
import com.devbridge.sprintplanning.task.Task;
import com.devbridge.sprintplanning.task.TaskService;
import org.springframework.stereotype.Service;

@Service
public class SprintService {
  private final SprintRepository sprintRepository;
  private final TaskService taskService;
  private final PlanService planService;
  private final MemberService memberService;

  public SprintService(SprintRepository sprintRepository,
    TaskService taskService,
    PlanService planService,
    MemberService memberService) {
    this.sprintRepository = sprintRepository;
    this.taskService = taskService;
    this.planService = planService;
    this.memberService = memberService;
  }

  public Sprint createNewSprint(Sprint sprint) {
    List<Task> tasksFromDatabase = new ArrayList<>();
    sprint.setCreationDate(LocalDateTime.now());
    sprint.setIsHistorical(false);
    sprint.setIsActive(false);
    sprintRepository.save(sprint);
    if (sprint.getTasks() != null) {
      for (Task task :
              sprint.getTasks()) {
        task.setSprintId(sprint.getId());
        tasksFromDatabase.add(taskService.createNewTask(task));
      }
      sprint.setTasks(tasksFromDatabase);
    }
    if (sprint.getMembersList() != null) {
      for (Member member:
           sprint.getMembersList()) {
        member.setPlans(createPlans(member.getPlans(), sprint.getId(), sprint.getMemberTeamId()));
      }
    }
    return sprint;
  }

  public void endCurrentSprint(Long sprintId) {
    sprintRepository.endSprint(sprintId);
  }

  public List<Sprint> findSprintsByTeamId(Long teamId) {
    return sprintRepository.allSprintsByMemberTeamId(teamId);
  }

  public Sprint findSprintById(Long id) {
    Sprint sprint = sprintRepository.getSprintById(id);
    sprint.setTasks(taskService.getAllTasksBySprintId(id));
    sprint.setMembersList(memberService.findMemberByTeamIdForSprint(sprint.getMemberTeamId(), sprint.getId()));
    return sprint;
  }

  private List<Plan> createPlans(List<Plan> plans, Long sprintId, Long memberTeamId) {
    for (Plan plan:
         plans) {
      plan.setSprintId(sprintId);
      plan.setMemberId(memberTeamId);
      return planService.createNewPlans(plan);
    }
    return null;
  }

  public void endSprint(Sprint sprint) {
    sprint.setIsHistorical(true);
    sprint.setIsActive(false);
    sprintRepository.update(sprint);
  }

  public Sprint getActiveSprintByTeamId(Long teamId) {
    return sprintRepository.getActiveSprintByTeamId(teamId);
  }

  public void startSprint(Long sprintId) {
    Sprint sprint = sprintRepository.getSprintById(sprintId);
    sprint.setIsActive(true);
    sprint.setIsHistorical(false);
    sprintRepository.update(sprint);
  }

  public List<Sprint> getAllSprints() {
    return sprintRepository.getAllSprints();
  }
}

package com.devbridge.sprintplanning.sprint;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.devbridge.sprintplanning.member.Member;
import com.devbridge.sprintplanning.member.MemberService;
import com.devbridge.sprintplanning.memberSprint.MemberSprintService;
import com.devbridge.sprintplanning.plan.Plan;
import com.devbridge.sprintplanning.plan.PlanService;
import com.devbridge.sprintplanning.task.Task;
import com.devbridge.sprintplanning.task.TaskService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SprintService {
  private final SprintRepository sprintRepository;
  private final TaskService taskService;
  private final PlanService planService;
  private final MemberService memberService;
  private final MemberSprintService memberSprintService;

  public SprintService(SprintRepository sprintRepository,
                       TaskService taskService,
                       PlanService planService,
                       MemberService memberService, MemberSprintService memberSprintService) {
    this.sprintRepository = sprintRepository;
    this.taskService = taskService;
    this.planService = planService;
    this.memberService = memberService;
    this.memberSprintService = memberSprintService;
  }

  @Transactional
  public Sprint createNewSprint(Sprint sprint) {
    sprint.setCreationDate(LocalDateTime.now());
    sprint.setStartDate(sprint.getStartDate().plusDays(1));
    sprint.setEndDate(sprint.getEndDate().plusDays(1));
    sprint.setIsHistorical(false);
    sprint.setIsActive(false);
    sprintRepository.save(sprint);
    Map<Long, Long> oldAndNewTaskIds = new HashMap<>();
    for (Task task:
            sprint.getTasks()) {
      Long oldId = task.getId();
      task.setSprintId(sprint.getId());
      taskService.createNewTask(task);
      oldAndNewTaskIds.put(oldId, task.getId());
    }
    if (sprint.getMembersList() != null) {
      for (Member member:
           sprint.getMembersList()) {
        member.setPlans(createPlans(member.getPlans(), sprint.getId(), member.getId(), oldAndNewTaskIds));
        memberSprintService.createEntry(sprint.getId(), member.getId(), true);
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

  @Transactional
  public List<Plan> createPlans(List<Plan> plans, Long sprintId, Long memberId, Map<Long, Long> oldAndNewTaskIds) {
    for (Plan plan:
         plans) {
      plan.setSprintId(sprintId);
      plan.setMemberId(memberId);
      return planService.createNewPlans(plan, oldAndNewTaskIds);
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

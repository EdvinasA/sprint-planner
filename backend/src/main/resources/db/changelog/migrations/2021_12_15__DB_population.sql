--liquibase formatted sql

--changeset Povilas:9
insert into "member_team" ("creation_date", "id", "team_name")
values ('2001-07-05 00:00:00', '1', 'LSPT');

--changeset Povilas:10
insert into "member" ("creation_date", "full_name", "is_deleted", "member_team_id", "role")
values ('2001-05-01 00:00:00', 'Justas Buzaitis',  false, '1', NULL);
insert into "member" ("creation_date", "full_name", "is_deleted", "member_team_id", "role")
values ('2004-01-08 00:00:00', 'Edvinas Alimas', false, '1', NULL);

-- --changeset Povilas:11
-- insert into "sprint" ("creation_date", "end_date", "id", "is_active", "is_historical",
-- "member_team_id", "start_date", "title") values ('2012-07-01 00:00:00', '2021-12-13',
-- '1', false, true, '1', '2021-12-06', 'Sprint 6');
-- insert into "sprint" ("creation_date", "end_date", "id", "is_active", "is_historical",
-- "member_team_id", "start_date", "title") values ('2016-04-01 00:00:00', '2021-12-20',
-- '2', true, false, '1', '2021-12-13', 'Sprint 7');
-- insert into "sprint" ("creation_date", "end_date", "id", "is_active", "is_historical",
-- "member_team_id", "start_date", "title") values ('2014-08-12 00:00:00', '2021-12-27',
-- '3', false, false, '1', '2021-12-20', 'Sprint 8');
--
-- --changeset Povilas:12
-- insert into "task" ("creation_date", "description", "id", "key", "new_points", "old_points",
-- "remaining_points", "show", "sprint_id", "task_type") values (NULL, NULL, '1', 'Vacation',
-- NULL, NULL, NULL, false, '2', 'None');
-- insert into "task" ("creation_date", "description", "id", "key", "new_points", "old_points",
-- "remaining_points", "show", "sprint_id", "task_type") values (NULL, NULL, '2', 'Education',
-- NULL, NULL, NULL, false, '2', 'None');
-- insert into "task" ("creation_date", "description", "id", "key", "new_points", "old_points",
-- "remaining_points", "show", "sprint_id", "task_type") values ('2016-01-04 00:00:00', 'SA', '3',
-- 'SA-4', 0, 5, 3, true, '2', 'Goal');
-- insert into "task" ("creation_date", "description", "id", "key", "new_points", "old_points",
-- "remaining_points", "show", "sprint_id", "task_type") values ('2016-01-04 00:00:00', 'SA', '4',
-- 'SA-5', 0, 5, 3, true, '2', 'Goal');
--
-- --changeset Povilas:13
-- insert into "plan" ("creation_date", "id", "member_id", "plan_type", "sprint_id")
-- values ('2012-12-12 00:00:00', '1', '1', 'INITIAL', '2');
-- insert into "plan" ("creation_date", "id", "member_id", "plan_type", "sprint_id")
-- values ('2020-04-01 00:00:00', '2', '2', 'INITIAL', '2');
-- insert into "plan" ("creation_date", "id", "member_id", "plan_type", "sprint_id")
-- values ('2013-04-01 00:00:00', '3', '2', 'CURRENT', '2');
-- insert into "plan" ("creation_date", "id", "member_id", "plan_type", "sprint_id")
-- values ('2012-12-12 00:00:00', '4', '1', 'CURRENT', '2');
--
-- --changeset Povilas:14
-- insert into "allocation" ("creation_date", "day_of_sprint", "id", "member_id", "plan_id",
-- "task_id") values ('2012-12-12 00:00:00', '2021-12-13', '1', '1', '1', '1');

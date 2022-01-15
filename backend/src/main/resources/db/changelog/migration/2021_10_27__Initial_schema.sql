--liquibase formatted sql

--changeset Povilas:1
CREATE TABLE member_team(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  team_name varchar(100),
  creation_date TIMESTAMP
);

--changeset Povilas:2
CREATE TABLE sprint(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  start_date DATE,
  end_date DATE,
  member_team_id BIGINT,
  FOREIGN KEY (member_team_id) REFERENCES member_team(id),
  is_historical BOOLEAN,
  is_active BOOLEAN,
  creation_date TIMESTAMP
  );

--changeset Povilas:3
CREATE TABLE task(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  key VARCHAR(50),
  description TEXT,
  task_type VARCHAR(20),
  old_points INT,
  remaining_points INT,
  new_points INT,
  creation_date TIMESTAMP,
  button_color VARCHAR(50),
  sprint_id BIGINT,
  FOREIGN KEY (sprint_id) REFERENCES sprint(id),
  show BOOLEAN
);

--changeset Povilas:4
CREATE TABLE member(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  role varchar(20),
  full_name varchar(100),
  email varchar(255),
  password varchar(255),
  access_token varchar(255),
  refresh_token varchar(255),
  member_team_id BIGINT,
  is_deleted BOOLEAN,
  creation_date TIMESTAMP
);

--changeset Povilas:5
CREATE TABLE plan(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  sprint_id BIGINT,
  plan_type varchar(20),
  member_id BIGINT,
  FOREIGN KEY (member_id) REFERENCES member(id),
  creation_date TIMESTAMP
);

--changeset Povilas:6
CREATE TABLE allocation(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  member_id BIGINT,
  FOREIGN KEY (member_id) REFERENCES member(id),
  day_of_sprint DATE,
  plan_id BIGINT,
  FOREIGN KEY (plan_id) REFERENCES plan(id),
  task_id BIGINT,
  FOREIGN KEY (task_id) REFERENCES task(id),
  creation_date TIMESTAMP
);

--changeset Povilas:7
CREATE TABLE member_sprint(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  member_id BIGSERIAL,
  sprint_id BIGSERIAL,
  is_in_sprint BOOLEAN,
  creation_date TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES member(id),
  FOREIGN KEY (sprint_id) REFERENCES sprint(id)
);

--changeset Povilas:8
CREATE TABLE member_team_list(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  member_id BIGSERIAL,
  member_team_id BIGSERIAL,
  FOREIGN KEY (member_id) REFERENCES member(id),
  FOREIGN KEY (member_team_id) REFERENCES member_team(id),
  creation_date TIMESTAMP
);

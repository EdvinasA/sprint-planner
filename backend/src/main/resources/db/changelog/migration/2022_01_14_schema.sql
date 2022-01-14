--liquibase formatted sql

--changeset Povilas:8
CREATE TABLE member_team_member(
  member_id BIGSERIAL,
  member_team_id BIGSERIAL,
  FOREIGN KEY (member_id) REFERENCES member(id),
  FOREIGN KEY (member_team_id) REFERENCES member_team(id)
);

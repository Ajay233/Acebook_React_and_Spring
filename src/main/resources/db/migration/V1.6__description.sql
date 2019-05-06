DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
  id bigserial PRIMARY KEY,
  postId int NOT NULL,
  userId int,
  forename varchar(250),
  surname varchar(250)
);
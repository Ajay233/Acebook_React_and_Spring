DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id bigserial PRIMARY KEY,
  postId int NOT NULL,
  userId int,
  comment varchar(250)
);
DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions (
  id bigserial PRIMARY KEY,
  userid int NOT NULL,
  forename varchar(250) NOT NULL,
  surname varchar(250) NOT NULL,
  password varchar(250) NOT NULL,
  day int NOT NULL,
  month int NOT NULL,
  year int NOT NULL,
  email varchar(250) NOT NULL,
  mobile int NOT NULL
);

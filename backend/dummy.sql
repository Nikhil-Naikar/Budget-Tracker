CREATE TABLE temp(
    user_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username varchar(50),
    email varchar(255)
);

INSERT INTO temp(username, email) 
VALUES ('bob','bob@gmail.com');
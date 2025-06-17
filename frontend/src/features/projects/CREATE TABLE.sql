CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(100)
);

CREATE TABLE projects (
    id CHAR(36) PRIMARY KEY,
    project_name VARCHAR(255),
    project_description TEXT,
    project_category VARCHAR(100),
    assigned_to CHAR(36),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (assigned_to) REFERENCES users(id)
);

CREATE TABLE tasks (
    id CHAR(36) PRIMARY KEY,
    task_name VARCHAR(255),
    priority VARCHAR(50),
    flag BOOLEAN,
    user_id CHAR(36),
    project_id CHAR(36),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE project_members (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    project_id CHAR(36),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (project_id) REFERENCES projects(id),
    UNIQUE (user_id, project_id)
);

CREATE TABLE comments (
  id CHAR(36) PRIMARY KEY,
  task_id CHAR(36),        -- Foreign key to tasks
  user_id CHAR(36),        -- Foreign key to users
  content TEXT NOT NULL,   -- Comment content
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (task_id) REFERENCES tasks(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

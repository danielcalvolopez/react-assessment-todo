import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [toggleAddTask, setToggleAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });
  const [taskEditing, setTaskEditing] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const values = {
    toggleAddTask,
    setToggleAddTask,
    tasks,
    setTasks,
    todos,
    setTodos,
    completed,
    setCompleted,
    task,
    setTask,
    isValid,
    setIsValid,
    taskEditing,
    setTaskEditing,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;

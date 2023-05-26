import classes from "./tasks.module.css";
import Task from "./Task";
import TasksColumn from "./TasksColumn";
import { useContext } from "react";
import { useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";

const Tasks = () => {
  const { tasks, todos, setTodos, completed, setCompleted } =
    useContext(TaskContext);

  useEffect(() => {
    const filteredTodos = tasks.filter((task) => task.status === "todo");
    const filteredCompleted = tasks.filter(
      (task) => task.status === "completed"
    );

    setTodos(filteredTodos);
    setCompleted(filteredCompleted);
  }, [setCompleted, setTodos, tasks]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <TasksColumn status="todo" title="to do">
          {todos.map(({ name, id }) => (
            <Task title={name} key={id} id={id} />
          ))}
        </TasksColumn>
        <TasksColumn status="completed" title="completed">
          {completed.map(({ name, id }) => (
            <Task title={name} key={id} id={id} />
          ))}
        </TasksColumn>
      </div>
    </div>
  );
};

export default Tasks;

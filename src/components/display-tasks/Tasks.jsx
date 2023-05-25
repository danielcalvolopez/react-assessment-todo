import classes from "./tasks.module.css";
import Task from "./Task";
import TasksColumn from "./TasksColumn";

const DisplayTasks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <TasksColumn title="to do">
          <Task title="task1" />
          <Task title="task1" />
          <Task title="task1" />
          <Task title="task1" />
          <Task title="task1" />
          <Task title="task1" />
          <Task title="task1" />
        </TasksColumn>
        <TasksColumn title="completed">
          <Task title="task1" />
          <Task title="task1" />
        </TasksColumn>
      </div>
    </div>
  );
};

export default DisplayTasks;

import classes from "./display-tasks.module.css";
import Task from "./Task";

const DisplayTasks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.column}>
          <h3>To do</h3>
          <div className={classes.list}>
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
            <Task title="task1" />
          </div>
        </div>
        <div className={classes.column}>
          <h3>Completed</h3>
          <div className={classes.list}>
            <Task title="task1" />
            <Task title="task1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTasks;

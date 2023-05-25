import classes from "./tasks-column.module.css";

const TasksColumn = ({ title, children }) => {
  return (
    <div className={classes.column}>
      <h3>{title}</h3>
      <div className={classes.list}>{children}</div>
    </div>
  );
};

export default TasksColumn;

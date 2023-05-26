import { useContext } from "react";
import { useDrop } from "react-dnd";
import { TaskContext } from "../../context/TaskContext";
import classes from "./tasks-column.module.css";

const TasksColumn = ({ title, children, status }) => {
  const { setTasks, todos, completed } = useContext(TaskContext);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToColumn(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToColumn = (id) => {
    setTasks((prev) => {
      const modifiedTask = prev.map((task) => {
        if (task.id === id) {
          return { ...task, status: status };
        }

        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(modifiedTask));

      return modifiedTask;
    });
  };
  return (
    <div ref={drop} className={`${isOver ? classes.over : classes.column}`}>
      <div className={classes.title}>
        <h3>{title}</h3>
        {title === "to do" ? (
          <h3>{todos.length}</h3>
        ) : (
          <h3>{completed.length}</h3>
        )}
      </div>
      <div className={classes.list}>{children}</div>
    </div>
  );
};

export default TasksColumn;

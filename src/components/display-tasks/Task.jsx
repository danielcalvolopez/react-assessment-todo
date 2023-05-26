import { useContext } from "react";
import { useDrag } from "react-dnd";
import { MdDeleteOutline } from "react-icons/md";
import { TaskContext } from "../../context/TaskContext";
import classes from "./task.module.css";

const Task = ({ title, id }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDeleteTask = () => {
    const filteredTask = tasks.filter((task) => task.id !== id);

    setTasks(filteredTask);
  };

  return (
    <div
      ref={drag}
      className={`${isDragging ? classes.opacity : classes.container}`}
    >
      {title}
      <span onClick={handleDeleteTask} className={classes.delete}>
        <MdDeleteOutline size={19} />
      </span>
    </div>
  );
};

export default Task;

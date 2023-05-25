import { MdDeleteOutline } from "react-icons/md";
import classes from "./task.module.css";

const Task = ({ title }) => {
  return (
    <p className={classes.container}>
      {title}
      <span className={classes.delete}>
        <MdDeleteOutline />
      </span>
    </p>
  );
};

export default Task;

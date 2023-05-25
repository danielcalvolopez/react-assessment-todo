import classes from "./add-task.module.css";
import { SlArrowRight } from "react-icons/sl";

const AddTask = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <input type="text" placeholder="type your task..." />
        <button className={classes.button} type="submit">
          <SlArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default AddTask;

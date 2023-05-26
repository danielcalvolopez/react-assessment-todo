import classes from "./add-task.module.css";
import { SlArrowRight } from "react-icons/sl";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../../context/TaskContext";

const AddTask = () => {
  const { setTasks, task, setTask, isValid, setIsValid } =
    useContext(TaskContext);

  const handleOnAddTask = (event) => {
    setTask({ ...task, id: uuidv4(), name: event.target.value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (task.name.length < 3) {
      setIsValid(false);
      return;
    }

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    setTask({ id: "", name: "", status: "todo" });
    setIsValid(true);
  };

  return (
    <form onSubmit={handlerSubmit} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.add}>
          <input
            onChange={handleOnAddTask}
            value={task.name}
            type="text"
            placeholder="type your task..."
          />
          <button className={classes.button} type="submit">
            <SlArrowRight size={17} />
          </button>
        </div>

        {!isValid && (
          <p className={classes.error}>
            Task must contain at least 3 characters
          </p>
        )}
      </div>
    </form>
  );
};

export default AddTask;

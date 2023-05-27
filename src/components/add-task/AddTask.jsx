import classes from "./add-task.module.css";
import { VscAdd } from "react-icons/vsc";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../../context/TaskContext";

const AddTask = () => {
  const { setTasks, task, setTask, isValid, setIsValid, tasks } =
    useContext(TaskContext);

  const [error, setError] = useState("");

  const handleOnAddTask = (event) => {
    const value = event.target.value;

    setTask({ ...task, id: uuidv4(), name: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const found = tasks.find((item) => item.name === task.name);
    if (found) {
      setError("This task has already been added");
      setIsValid(false);
      return;
    }

    if (task.name.length < 3) {
      setError("Task must contain at least 3 characters");
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
            <VscAdd size={25} />
          </button>
        </div>

        {!isValid && <p className={classes.error}>{error}</p>}
      </div>
    </form>
  );
};

export default AddTask;

import AddTask from "./components/add-task/AddTask";
import Tasks from "./components/display-tasks/Tasks";
import classes from "./app.module.css";
import { useState } from "react";

import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const App = () => {
  const [toggleAddTask, setToggleAddTask] = useState(false);

  const handleToggleAddTask = () => {
    setToggleAddTask((prev) => !prev);
  };
  return (
    <div className={classes["main-container"]}>
      <span
        onClick={handleToggleAddTask}
        className={`${toggleAddTask ? classes.toggle : classes["toggle-off"]}`}
      >
        {toggleAddTask ? <SlArrowUp size={35} /> : <SlArrowDown size={35} />}
      </span>
      {toggleAddTask && <AddTask />}
      <Tasks />
    </div>
  );
};

export default App;

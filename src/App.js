import AddTask from "./components/add-task/AddTask";
import Tasks from "./components/display-tasks/Tasks";
import classes from "./app.module.css";
import { useContext, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { TaskContext } from "./context/TaskContext";

const App = () => {
  const { toggleAddTask, setToggleAddTask, tasks, setTasks } =
    useContext(TaskContext);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, [setTasks]);

  const handleToggleAddTask = () => {
    setToggleAddTask((prev) => !prev);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes["main-container"]}>
        <span
          onClick={handleToggleAddTask}
          className={`${
            toggleAddTask ? classes.toggle : classes["toggle-off"]
          }`}
        >
          {toggleAddTask ? <SlArrowUp size={30} /> : <SlArrowDown size={30} />}
        </span>
        {toggleAddTask && <AddTask tasks={tasks} setTasks={setTasks} />}
        <Tasks />
      </div>
    </DndProvider>
  );
};

export default App;

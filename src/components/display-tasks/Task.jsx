import { useContext, useState } from "react";
import { useDrag } from "react-dnd";
import { MdDeleteOutline, MdCancel, MdSave } from "react-icons/md";
import { TaskContext } from "../../context/TaskContext";
import classes from "./task.module.css";
import { AiFillEdit } from "react-icons/ai";

const Task = ({ title, id, status }) => {
  const { tasks, setTasks, taskEditing, setTaskEditing } =
    useContext(TaskContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [editingText, setEditingText] = useState(title);

  const handleOnCancelEdit = () => {
    setTaskEditing(null);
  };

  const handleDeleteTask = () => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  const handleOnSave = (id) => {
    const index = tasks.findIndex((item) => item.id === id);
    const newData = [...tasks];
    newData[index].name = editingText;

    if (editingText.length > 3) {
      setTasks(newData);
      localStorage.setItem("tasks", JSON.stringify(newData));
      setTaskEditing(null);
    }
  };

  const handleOnEditInput = (event) => {
    setEditingText(event.target.value);
  };

  return (
    <div
      ref={drag}
      className={`${isDragging ? classes.opacity : classes.container} ${
        status === "completed" && classes.completed
      }`}
    >
      {taskEditing === id ? (
        <>
          <input
            autoFocus
            className={classes.editing}
            type="text"
            value={editingText}
            onChange={handleOnEditInput}
          />
          <div className={classes.icons}>
            <span onClick={() => handleOnSave(id)} className={classes.save}>
              <MdSave size={19} />
            </span>
            <span onClick={handleOnCancelEdit} className={classes.cancel}>
              <MdCancel size={19} />
            </span>
          </div>
        </>
      ) : (
        <>
          <p>{title}</p>
          <div className={classes.icons}>
            <span onClick={() => setTaskEditing(id)} className={classes.edit}>
              <AiFillEdit size={19} />
            </span>
            <span onClick={handleDeleteTask} className={classes.delete}>
              <MdDeleteOutline size={19} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;

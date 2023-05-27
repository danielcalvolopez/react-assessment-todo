import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import classes from "./remove-task-modal.module.css";
import Modal from "./UI/Modal";

const RemoveTaskModal = ({ id }) => {
  const { setConfirmationModal, tasks, setTasks } = useContext(TaskContext);

  const handleDeleteTask = () => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);

    setConfirmationModal(false);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  return (
    <Modal>
      <div className={classes.container}>
        <h1 className={classes.header}>
          Are you sure you want to delete this task?
        </h1>
        <div className={classes.actions}>
          <button
            onClick={handleDeleteTask}
            className={classes.yes}
            type="submit"
          >
            yes
          </button>
          <button
            onClick={() => setConfirmationModal(false)}
            className={classes.no}
            type="submit"
          >
            no
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveTaskModal;

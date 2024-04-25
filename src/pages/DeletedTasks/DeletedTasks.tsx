import React from "react";
import TodoList from "../../components/TodoList/TodoList";
import { useAppDispatch } from "../../store/hooks";
import { toggleTaskDeleted } from "../../store/tasksSlice";
import css from "../AllTasks/AllTasks.module.scss";

const DeletedTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRestoreTask = (taskId: string) => {
    dispatch(toggleTaskDeleted(taskId));
  };

  return (
    <div className={css.tasks}>
      <h2>Deleted Tasks</h2>
      <TodoList deleted={true} onRestore={handleRestoreTask} />
    </div>
  );
};

export default DeletedTasks;

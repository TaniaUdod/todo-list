import { FC } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../types/types";
import { toggleTaskDeleted } from "../../store/tasksSlice";
import toast from "react-hot-toast";
import css from "./TodoItem.module.scss";

interface TodoItemProps {
  task: Task;
  onRestore?: () => void;
}

const TodoItem: FC<TodoItemProps> = ({ task, onRestore }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(toggleTaskDeleted(task.id));
    toast.success("Task deleted successfully");
  };

  const handleRestore = () => {
    if (onRestore) {
      onRestore();
    }
  };

  return (
    <li className={css["todo-item"]}>
      <span>{task.title}</span>
      {onRestore ? (
        <button onClick={handleRestore} className={css.restore}>
          Restore
        </button>
      ) : (
        <button onClick={handleDelete} className={css.delete}>
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;

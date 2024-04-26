import { FC, useState } from "react";
import { Task } from "../../types/types";
import { useAppDispatch } from "../../store/hooks";
import { toggleTaskDeleted, updateTask } from "../../store/tasksSlice";
import TaskEditForm from "../TaskEditForm/TaskEditForm";
import toast from "react-hot-toast";
import css from "./TodoItem.module.scss";

interface TodoItemProps {
  task: Task;
  onRestore?: () => void;
}

const TodoItem: FC<TodoItemProps> = ({ task, onRestore }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(toggleTaskDeleted(task.id));
    toast.success("Task deleted successfully", { position: "top-right" });
  };

  const handleRestore = () => {
    if (onRestore) {
      onRestore();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (updatedTask: Task) => {
    dispatch(updateTask(updatedTask));
    toast.success("Task updated successfully", { position: "top-right" });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li className={css["todo-item"]}>
      {isEditing ? (
        <TaskEditForm
          task={task}
          onSave={handleSaveEdit}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <span>{task.title}</span>

          {onRestore ? (
            <button onClick={handleRestore} className={css.restore}>
              Restore
            </button>
          ) : (
            <>
              <button onClick={handleEdit} className={css.edit}>
                Edit
              </button>
              <button onClick={handleDelete} className={css.delete}>
                Delete
              </button>
            </>
          )}
        </>
      )}
    </li>
  );
};

export default TodoItem;

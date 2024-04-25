import { FC } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../types/types";
import { toggleTaskDeleted } from "../../store/tasksSlice";

interface TodoItemProps {
  task: Task;
  onRestore?: () => void;
}

const TodoItem: FC<TodoItemProps> = ({ task, onRestore }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(toggleTaskDeleted(task.id));
  };

  const handleRestore = () => {
    if (onRestore) {
      onRestore();
    }
  };

  return (
    <li>
      <span>{task.title}</span>
      {onRestore ? (
        <button onClick={handleRestore}>Restore</button>
      ) : (
        <button onClick={handleDelete}>Delete</button>
      )}
    </li>
  );
};

export default TodoItem;

import React from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../types/types";
import { toggleTaskDeleted } from "../../store/tasksSlice";

interface TodoItemProps {
  task: Task;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(toggleTaskDeleted(task.id));
  };

  return (
    <li>
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;

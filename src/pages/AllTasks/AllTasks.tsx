import React from "react";
import { addTask } from "../../store/tasksSlice";
import { useAppDispatch } from "../../store/hooks";
import { Task } from "../../types/types";
import TodoList from "../../components/TodoList/TodoList";
import TaskForm from "../../components/TaskForm/TaskForm";

const AllTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task));
  };

  return (
    <div>
      <h2>All Tasks</h2>
      <TaskForm onSubmit={handleAddTask} />
      <TodoList deleted={false} />
    </div>
  );
};

export default AllTasks;
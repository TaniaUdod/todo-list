import { FC } from "react";
import { addTask } from "../../store/tasksSlice";
import { useAppDispatch } from "../../store/hooks";
import { Task } from "../../types/types";
import TodoList from "../../components/TodoList/TodoList";
import TaskForm from "../../components/TaskForm/TaskForm";
import css from "./AllTasks.module.scss";

const AllTasks: FC = () => {
  const dispatch = useAppDispatch();

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task));
  };

  return (
    <div className={css.tasks}>
      <h2>All Tasks</h2>
      <TaskForm onSubmit={handleAddTask} />
      <TodoList />
    </div>
  );
};

export default AllTasks;

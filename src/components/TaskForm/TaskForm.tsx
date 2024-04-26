import { FC, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types/types";
import toast from "react-hot-toast";
import css from "./TaskForm.module.scss";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (title.trim()) {
      const newTask: Task = {
        id: uuidv4(),
        title: title,
      };

      onSubmit(newTask);
      setTitle("");
      toast.success("Task added successfully", { position: "top-right" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={title}
        placeholder="Enter your task..."
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

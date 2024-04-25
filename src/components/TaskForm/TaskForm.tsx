import { FC, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types/types";

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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

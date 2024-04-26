import { FC, FormEvent, useState } from "react";
import { Task } from "../../types/types";
import css from "./TaskEditForm.module.scss";

interface TaskEditFormProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
}

const TaskEditForm: FC<TaskEditFormProps> = ({ task, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const updatedTask: Task = { ...task, title: editedTitle };
    onSave(updatedTask);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className={css["form-edit"]}>
      <input
        type="text"
        value={editedTitle}
        onChange={(event) => setEditedTitle(event.target.value)}
      />
      <button type="submit" className={css.save}>
        Save
      </button>
      <button type="button" onClick={handleCancel} className={css.cancel}>
        Cancel
      </button>
    </form>
  );
};

export default TaskEditForm;

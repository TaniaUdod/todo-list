import React from "react";
import TodoList from "../../components/TodoList/TodoList";

const DeletedTasks: React.FC = () => {
  return (
    <div>
      <h2>Deleted Tasks</h2>
      <TodoList deleted={true} />
    </div>
  );
};

export default DeletedTasks;

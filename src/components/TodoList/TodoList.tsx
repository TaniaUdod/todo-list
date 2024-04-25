import { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import TodoItem from "../TodoItem/TodoItem";
import { selectItems, selectDeletedTasks } from "../../store/selectors";
import { Task } from "../../types/types";

interface TodoListProps {
  deleted?: boolean;
  onRestore?: (taskId: string) => void;
}

const TodoList: FC<TodoListProps> = ({ deleted = false, onRestore }) => {
  const tasks = useAppSelector(deleted ? selectDeletedTasks : selectItems);

  const handleRestore = (taskId: string) => {
    if (onRestore) {
      onRestore(taskId);
    }
  };

  return (
    <ul>
      {tasks.map((task: Task) => (
        <TodoItem
          key={task.id}
          task={task}
          onRestore={deleted ? () => handleRestore(task.id) : undefined}
        />
      ))}
    </ul>
  );
};

export default TodoList;

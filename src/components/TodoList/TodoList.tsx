import { FC } from "react";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../store/hooks";
import { selectFilteredTasks } from "../../store/selectors";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  deleted?: boolean;
}

const TodoList: FC<TodoListProps> = ({ deleted = false }) => {
  const tasks = useAppSelector((state: RootState) =>
    selectFilteredTasks(state, deleted)
  );

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;

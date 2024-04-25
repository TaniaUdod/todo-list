import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/types";

interface TasksState {
  items: Task[];
  deletedTasks: Task[];
}

const initialState: TasksState = {
  items: [],
  deletedTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.items.push(action.payload);
    },
    toggleTaskDeleted(state, action: PayloadAction<string>) {
      const taskToDelete = state.items.find(
        (task) => task.id === action.payload
      );
      if (taskToDelete) {
        state.items = state.items.filter((task) => task.id !== action.payload);
        state.deletedTasks.push(taskToDelete);
      } else {
        const taskToRestore = state.deletedTasks.find(
          (task) => task.id === action.payload
        );
        if (taskToRestore) {
          state.deletedTasks = state.deletedTasks.filter(
            (task) => task.id !== action.payload
          );
          state.items.push(taskToRestore);
        }
      }
    },
  },
});

export const { addTask, toggleTaskDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;

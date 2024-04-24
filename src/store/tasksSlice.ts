import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload);
      },
      prepare(task: Task) {
        const newTask = { ...task, id: uuidv4(), deleted: false };
        return { payload: newTask };
      },
    },
    toggleTaskDeleted(state, action: PayloadAction<string>) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.deleted = !task.deleted;
      }
    },
  },
});

export const { addTask, toggleTaskDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;

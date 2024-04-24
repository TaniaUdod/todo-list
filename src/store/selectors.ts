import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Task } from "../types/types";

export const selectTasks = (state: RootState) => state.tasks;

export const selectFilteredTasks = createSelector(
  [selectTasks, (_, deleted: boolean) => deleted],
  (tasks, deleted) =>
    deleted ? tasks.filter((task: Task) => task.deleted) : tasks
);

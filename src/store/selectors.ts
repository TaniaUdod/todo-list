import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectTasks = (state: RootState) => state.tasks;

export const selectItems = createSelector(
  [selectTasks],
  (tasks) => tasks.items
);

export const selectDeletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.deletedTasks
);

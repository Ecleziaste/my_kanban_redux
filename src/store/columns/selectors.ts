import { createSelector } from "reselect";
import { RootState } from "../../store";

export const selectColumns = (state: RootState) =>
  state.columns.map((column) => column.id);

export const selectColumnById = createSelector(
  (state: RootState) => state.columns,
  (_: any, id: number) => id,
  (columns, id) => columns.find((column) => column.id === id)
);
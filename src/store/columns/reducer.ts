import { createReducer } from "@reduxjs/toolkit";
import { ColumnType } from "../../App";
import { changeTitle } from "./actions";

const initialState: Array<ColumnType> = [
  { title: "TODO", id: 1, isActive: false },
  { title: "In Progress", id: 2, isActive: false },
  { title: "Testing", id: 3, isActive: false },
  { title: "Done", id: 4, isActive: false },
];
// isActive убрать, если не понадобится
export const columnsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTitle, (state, action) => {
    state.map((c: any) => {
      if (c.id === action.payload.id) {
        c.title = action.payload.newTitle;
      }
    });
  });
});

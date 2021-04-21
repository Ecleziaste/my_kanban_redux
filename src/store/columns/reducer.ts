import { createReducer } from "@reduxjs/toolkit";
import { ColumnType } from "../../Types";
import { changeTitle } from "./actions";

const initialState: Array<ColumnType> = [
  { title: "TODO", id: "1" },
  { title: "In Progress", id: "2" },
  { title: "Testing", id: "3" },
  { title: "Done", id: "4" },
];

export const columnsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTitle, (state, action) => {
    state.map((column) => {
      if (column.id === action.payload.id) {
        column.title = action.payload.newText;
      }
      return state;
    });
  });
});

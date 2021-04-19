import { createReducer } from "@reduxjs/toolkit";
import { ColumnType } from "../../App";
import { changeTitle } from "./actions";
import { RootState } from "../../store";

const initialState: Array<ColumnType> = [
  { title: "TODO", id: "1" },
  { title: "In Progress", id: "2" },
  { title: "Testing", id: "3" },
  { title: "Done", id: "4" },
];

export const columnsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTitle, (state, action) => {
    state.map((c: ColumnType) => {
      if (c.id === action.payload.id) {
        c.title = action.payload.newText;
      }
      return state;
    });
  });
});

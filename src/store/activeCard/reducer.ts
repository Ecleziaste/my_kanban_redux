import { createReducer } from "@reduxjs/toolkit";
import { toggleActiveCard } from "./actions";

const initialState: any = null;

export const activeCardReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleActiveCard, (state, action) => {
    return (state = action.payload);
  });
});

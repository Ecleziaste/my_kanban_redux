import { createReducer } from "@reduxjs/toolkit";
import { CardType } from "../../App";
import { toggleActiveCard } from "./actions";

const initialState = null as null | CardType;

export const activeCardReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleActiveCard, (_, action) => {
    return action.payload;
  });
});

import { createReducer } from "@reduxjs/toolkit";
import { CardType } from "../../App";
import {
  addCard,
  removeCard,
  changeCardDesc,
  changeCardTitle,
} from "./actions";

const initialState: Array<CardType> = [];

export const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCard, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeCard, (state, action) => {
      const newState = state.filter((c) => c.id !== action.payload);
      return newState;
    })
    .addCase(changeCardDesc, (state, action) => {
      state.map((c: CardType) => {
        if (c.id === action.payload.id) {
          c.description = action.payload.newText;
        }
        return state;
      });
    })
    .addCase(changeCardTitle, (state, action) => {
      state.map((c: CardType) => {
        if (c.id === action.payload.id) {
          c.title = action.payload.newText;
        }
        return state;
      });
    });
});

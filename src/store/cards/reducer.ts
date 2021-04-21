import { createReducer } from "@reduxjs/toolkit";
import { CardType } from "../../Types";
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
      if (action.payload.title === undefined) {
        alert("Заголовок должен содержать хотя бы один символ");
      } else state.push(action.payload);
    })
    .addCase(removeCard, (state, action) => {
      const newState = state.filter((card) => card.id !== action.payload);
      return newState;
    })
    .addCase(changeCardDesc, (state, action) => {
      state.map((card) => {
        if (card.id === action.payload.id) {
          card.description = action.payload.newText;
        }
        return state;
      });
    })
    .addCase(changeCardTitle, (state, action) => {
      state.map((card) => {
        if (card.id === action.payload.id) {
          card.title = action.payload.newText;
        }
        return state;
      });
    });
});

import { createReducer } from "@reduxjs/toolkit";
import { CardType } from "../../App";
import { addCard, removeCard } from "./actions";

const initialState: Array<CardType> = [];

export const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCard, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeCard, (state, action) => {
      const newState = state.filter((c) => c.id !== action.payload);
      return newState;
    });
});

// const activeCard = state.find((card: any) => card.id === action.payload);

import { createReducer } from "@reduxjs/toolkit";
import { CardType } from "../../App";
import { activateCard, deactivateCard, addCard, removeCard } from "./actions";

const initialState: Array<CardType> = [];

export const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCard, (state, action) => {
      state.push(action.payload);
    })
    .addCase(activateCard, (state, action) => {
      state.map((c: any) => {
        // FIXME: any?
        if (c.id === action.payload) {
          c.isActive = true;
        }
      });
    })

    .addCase(deactivateCard, (state, action) => {
      state.map((c: any) => {
        if (c.id === action.payload) {
          c.isActive = false;
        }
      });
    })
    .addCase(removeCard, (state, action) => {
      const newState = state.filter((c) => c.id !== action.payload);
      return newState;
    });
});

// const activeCard = state.find((card: any) => card.id === action.payload);

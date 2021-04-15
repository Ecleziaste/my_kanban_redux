import { createReducer } from "@reduxjs/toolkit";
import { activateCard } from "./actions";
import { useSelector } from "react-redux";
import { selectCards } from "../cards/selectors";

const initialState: any = null;

export const activeCardReducer = createReducer(initialState, (builder) => {
  builder.addCase(activateCard, (state, action) => {
    const cards = useSelector(selectCards);
    state = cards.filter((c: any) => c.id === action.payload);
  });
});

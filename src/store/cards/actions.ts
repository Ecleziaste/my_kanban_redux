import { createAction } from "@reduxjs/toolkit";
import { CardType } from "../../App";
import { ActionType } from "../../App";

export const addCard = createAction<CardType>("cards/create");
export const removeCard = createAction<string>("cards/remove");
export const changeCardDesc = createAction<ActionType>("cards/changeDesc");
export const changeCardTitle = createAction<ActionType>(
  "cards/changeCardTitle"
);

import { createAction } from "@reduxjs/toolkit";
import { CardType } from "../../Types";
import { ActionType } from "../../Types";

export const addCard = createAction<CardType>("cards/create");
export const removeCard = createAction<string>("cards/remove");
export const changeCardDesc = createAction<ActionType>("cards/changeDesc");
export const changeCardTitle = createAction<ActionType>(
  "cards/changeCardTitle"
);

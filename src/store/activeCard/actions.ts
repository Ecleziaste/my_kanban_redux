import { createAction } from "@reduxjs/toolkit";
import { CardType } from "../../Types";

export const toggleActiveCard = createAction<CardType | null>(
  "activecard/toggle"
);

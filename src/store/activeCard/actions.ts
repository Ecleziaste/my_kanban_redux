import { createAction } from "@reduxjs/toolkit";
import { CardType } from "../../App";

export const toggleActiveCard = createAction<CardType | null>(
  "activecard/toggle"
);
// export const refreshActiveCard = createAction<any>("activecard/refresh");

import { createAction } from "@reduxjs/toolkit";

export const addCard = createAction<any>("cards/create");
export const removeCard = createAction<any>("cards/remove");
export const changeCardDesc = createAction<any>("cards/changeDesc");
export const changeCardTitle = createAction<any>("cards/changeCardTitle");

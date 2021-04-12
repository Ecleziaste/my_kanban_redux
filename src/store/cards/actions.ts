import { createAction } from "@reduxjs/toolkit";

export const addCard = createAction<any>("cards/create");
export const activateCard = createAction<any>("cards/activate");

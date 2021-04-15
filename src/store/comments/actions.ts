import { createAction } from "@reduxjs/toolkit";

export const addComment = createAction<any>("comments/create");
export const removeComment = createAction<any>("comments/remove");
export const changeComment = createAction<any>("comments/crechange");

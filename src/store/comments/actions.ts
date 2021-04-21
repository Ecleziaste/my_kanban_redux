import { createAction } from "@reduxjs/toolkit";
import { CommentType, ActionType } from "../../Types";

export const addComment = createAction<CommentType>("comments/create");
export const removeComment = createAction<string>("comments/remove");
export const removeAllComments = createAction<string>("comments/removeAll");
export const changeComment = createAction<ActionType>("comments/change");

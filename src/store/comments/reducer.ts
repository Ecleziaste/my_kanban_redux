import { createReducer } from "@reduxjs/toolkit";
import { addComment, removeComment, changeComment } from "./actions";
import { CommentType } from "../../App";

const initialState: Array<CommentType> = [];

export const commentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addComment, (state, action) => {
    state.push(action.payload);
  });
});

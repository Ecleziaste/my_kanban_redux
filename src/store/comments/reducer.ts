import { createReducer } from "@reduxjs/toolkit";
import {
  addComment,
  removeComment,
  removeAllComments,
  changeComment,
} from "./actions";
import { CommentType } from "../../App";

const initialState: Array<CommentType> = [];

export const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeComment, (state, action) => {
      const newState = state.filter((c) => c.id !== action.payload);
      return newState;
    })
    .addCase(removeAllComments, (state, action) => {
      const newState = state.filter((c) => c.cardId !== action.payload);
      return newState;
    })
    .addCase(changeComment, (state, action) => {
      state.map((c: any) => {
        if (c.id === action.payload.id) {
          c.text = action.payload.newText;
        }
        return state;
      });
    });
});

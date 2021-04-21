import { createReducer } from "@reduxjs/toolkit";
import {
  addComment,
  removeComment,
  removeAllComments,
  changeComment,
} from "./actions";
import { CommentType } from "../../Types";

const initialState: Array<CommentType> = [];

export const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeComment, (state, action) => {
      const newState = state.filter((comment) => comment.id !== action.payload);
      return newState;
    })
    .addCase(removeAllComments, (state, action) => {
      const newState = state.filter(
        (comment) => comment.cardId !== action.payload
      );
      return newState;
    })
    .addCase(changeComment, (state, action) => {
      state.map((comment) => {
        if (comment.id === action.payload.id) {
          comment.text = action.payload.newText;
        }
        return state;
      });
    });
});

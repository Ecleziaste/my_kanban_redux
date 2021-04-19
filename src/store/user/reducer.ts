import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "./actions";

const initialState: string | null = prompt("Введите имя пользователя", "User");

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    return (state = action.payload);
  });
});

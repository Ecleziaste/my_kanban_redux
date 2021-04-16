import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "./actions";

const LocalStorageKeys = {
  user: "user",
};

const initialState: any = prompt("Введите имя пользователя", "User");

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(action.payload));
    return (state = action.payload);
  });
});

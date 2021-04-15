import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "./actions";

const initialState: any = prompt("Введите имя пользователя", "User");

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    // if (state === "") {
    //   state = prompt("Введите имя пользователя", "User");
    // }
    return (state = action.payload);
  });
});

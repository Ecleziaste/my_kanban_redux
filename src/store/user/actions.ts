import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction<string>("user/set");

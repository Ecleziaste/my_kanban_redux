import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>

export default store;

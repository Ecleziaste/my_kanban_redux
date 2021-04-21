import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../../Types";

export const changeTitle = createAction<ActionType>("columns/change");

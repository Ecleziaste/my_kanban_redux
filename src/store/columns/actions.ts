import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../../App";

export const changeTitle = createAction<ActionType>("columns/change");

import { createSelector } from "reselect";
import { RootState } from "../../store";

export const selectComments = (state: RootState) => state.comments;

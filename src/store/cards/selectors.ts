import { createSelector } from "reselect";
import { RootState } from "..";

export const selectCards = (state: any) => state.cards;

export const selectCardsIdsbyColumnId = createSelector(
  (state: RootState) => state.cards,
  (_: any, columnId: number) => columnId,
  (cards, columnId) =>
    cards.filter((card) => card.columnId === columnId).map((card) => card.id)
);

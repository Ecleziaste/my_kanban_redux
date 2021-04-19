import { createSelector } from "reselect";
import { RootState } from "..";

export const selectCards = (state: RootState) => state.cards;

export const selectCardsIdsbyColumnId = createSelector(
  (state: RootState) => state.cards,
  (_: RootState, columnId: string) => columnId,
  (cards, columnId) =>
    cards.filter((card) => card.columnId === columnId).map((card) => card.id)
);

// export const selectCardById = createSelector(
//   (state: RootState) => state.cards,
//   (_: any, id: string) => id,
//   (cards, id) => cards.filter((card) => card.id === id).map((card) => card.id)
// );

import { createSelector } from "reselect";
import { RootState } from "../../store";

export const selectComments = (state: RootState) => state.comments;

// export const selectByCardId = createSelector(
//   (state: RootState) => state.comments,
//   (_: RootState, id: string) => id,
//   (comments, id) => comments.filter((comment) => comment.cardId === id)
// );

// const commentsByCardId = comments.filter(
//     (comm: CommentType) => comm.cardId === card!.id
//   );

// export const selectCardById = createSelector(
//   (state: RootState) => state.cards,
//   (_: RootState, id: string) => id,
//   (cards, id) => cards.filter((card) => card.id === id).map((card) => card.id)
// );

// export const selectCardsIdsbyColumnId = createSelector(
//     (state: RootState) => state.cards,
//     (_: RootState, columnId: string) => columnId,
//     (cards, columnId) =>
//       cards.filter((card) => card.columnId === columnId).map((card) => card.id)
//   );

import { createAction } from "@reduxjs/toolkit";

export const addCard = createAction<any>("cards/create");
export const activateCard = createAction<any>("cards/activate");
export const deactivateCard = createAction<any>("cards/deactivate");
export const removeCard = createAction<any>("cards/remove");

// export const addCard = (card: any) => {
//   return {
//     type: "cards/create",
//     payload: card,
//   };
// };

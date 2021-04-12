import { CardType } from "../../App";
import { activateCard, addCard } from "./actions";

const initialState: Array<CardType> = [];

export const cardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addCard.type:
      console.log(action);

      return [...state, action.payload];

    // case activateCard.type: {
    //   console.log(action);
    //   const [newCards] = [...state];
    //   return [state[0], { isActive: action.payload }];
    // }
    default:
      return state;
  }
};

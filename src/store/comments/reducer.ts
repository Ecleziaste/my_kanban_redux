import { addComment } from "./actions";

const initialState: any = [];

export const commentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addComment.type: {
      console.log(action);

      return [...state, action.payload];
    }
    default:
      return state;
  }
};

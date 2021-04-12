import { combineReducers } from "redux";
import { cardsReducer } from "./cards/reducer";
import { columnsReducer } from "./columns/reducer";
import { commentsReducer } from "./comments/reducer";

const rootReducer = combineReducers({
  columns: columnsReducer,
  cards: cardsReducer,
  comments: commentsReducer,
});

export { rootReducer };

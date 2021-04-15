import { combineReducers } from "redux";
import { cardsReducer } from "./cards/reducer";
import { columnsReducer } from "./columns/reducer";
import { commentsReducer } from "./comments/reducer";
import { userReducer } from "./user/reducer";
import { activeCardReducer } from "./activeCard/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  comments: commentsReducer,
  activecard: activeCardReducer,
});

export { rootReducer };

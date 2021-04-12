import { ColumnType } from "../../App";
import { changeTitle } from "./actions";

const initialState: Array<ColumnType> = [
  { title: "TODO", id: 1, isActive: false },
  { title: "In Progress", id: 2, isActive: false },
  { title: "Testing", id: 3, isActive: false },
  { title: "Done", id: 4, isActive: false },
];

export const columnsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case changeTitle.type: {
      console.log(action);

      return [action.payload];
    }
    default:
      return state;
  }
};

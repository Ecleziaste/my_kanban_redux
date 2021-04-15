import { createAction } from "@reduxjs/toolkit";

export const changeTitle = createAction<any>("columns/change");

// export const changeTitle = (columns: any) => {
//   return {
//     type: "columns/change",
//     payload: columns,
//   };
// };

import { actionNameHandler } from "../../helper/reduxHandler";

const MainCombineReducers = (state = "", action) => {
  switch (action.type) {
    case actionNameHandler.addFolder: {
      const data = action.data;
      console.log("data", data);
      const item = [...state.item, data];
      console.log("item", item);
      return {
        ...state,
        item,
      };
    }

    default:
      return state;
  }
};

export default MainCombineReducers;

import { actionNameHandler, sideBarFolderHandler } from "../../helper/reduxHandler";

const MainCombineReducers = (state = "", action) => {
  switch (action.type) {

    case actionNameHandler.addFolder: {
      const data = action.data;
      const item = [...state.item, data];
      return {
        ...state,
        item,
      };
    }

    case actionNameHandler.editFolder :{
      return {
        ...state,
        item: state.item.map((user) => user.id === action.data.id && action.data)
      }
    }

    case actionNameHandler.deleteFolder :{
      return{
        ...state,
        item: state.item.filter((user) => user.id !== action.data)
      }
    }

    case sideBarFolderHandler.addSideFolder : {
      // console.log("state",state);
      return {
        ...state,
        sbFolder:[...state.sbFolder,action.data]
      };
    }

    case sideBarFolderHandler.editSideFolder :{
      console.log("111",state.sbFolder.map((user) => user.id === action.data.id && action.data));
      return {
        ...state,
        sbFolder: state.sbFolder.map((user) => user.id === action.data.id && action.data)
      }
    }
    default:
      return state;
  }
};

export default MainCombineReducers;

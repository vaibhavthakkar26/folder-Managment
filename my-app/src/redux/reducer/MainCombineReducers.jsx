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
      const editData = state.item.map((user) => user.id === action.data.id && action.data);
      localStorage.setItem("folder",JSON.stringify(editData));
      return {
        ...state,
        item: editData
      }
    }

    case actionNameHandler.deleteFolder :{
      const deleteData = state.item.filter((user) => user.id !== action.data);
      localStorage.setItem("folder",JSON.stringify(deleteData))
      return{
        ...state,
        item: deleteData
      }
    }

    case actionNameHandler.Genernal :{
      localStorage.setItem("folder",JSON.stringify(action.data));
      return{
        ...state,
        item: action.data
      }
    }

    case sideBarFolderHandler.addSideFolder : {
      return {
        ...state,
        sbFolder:[...state.sbFolder,action.data]
      };
    }

    case sideBarFolderHandler.editSideFolder :{
      const siderBarEdit = state.sbFolder.map((user) => user.id === action.data.id && action.data)
      localStorage.setItem("sideBarFolders",JSON.stringify(siderBarEdit));
      return {
        ...state,
        sbFolder: siderBarEdit
      }
    }

    case sideBarFolderHandler.deleteSideFolder :{
      const deleteSiderFolder = state.sbFolder.filter((user) => user.id !== action.data);
      localStorage.setItem("sideBarFolders",deleteSiderFolder);
      return{
        ...state,
        sbFolder: deleteSiderFolder
      }
    }

    case sideBarFolderHandler.sideBarGenernal : {
      localStorage.setItem("sideBarFolders",JSON.stringify(action.data));
      return {
        ...state,
        sbFolder : action.data
      }
    }

    case actionNameHandler.search :{
      return {
        ...state,
        item : action.data
      }
    }

    
    default:
      return state;
  }
};

export default MainCombineReducers;

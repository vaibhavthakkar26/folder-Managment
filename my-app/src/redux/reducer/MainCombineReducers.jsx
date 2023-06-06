import { actionNameHandler } from "../../helper/reduxHandler";

const MainCombineReducers = (state = "",action) =>{
    switch(action.type){
        case actionNameHandler.addFolder:
            return{
                ...state,
                item:[...state.item,action.data],
            }
        default:
            return state;
    }
}

export default MainCombineReducers;
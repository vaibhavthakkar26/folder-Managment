import { combineReducers,createStore } from "redux";
import MainCombineReducers from './reducer/MainCombineReducers';

const mainReducer = combineReducers({
    folder:MainCombineReducers
});

const commanData ={
    folder:{
        item:[],
    }
};

const store = createStore(mainReducer,commanData);
export default store;


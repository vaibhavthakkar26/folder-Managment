import { actionNameHandler } from "../helper/reduxHandler"

export const createFolder = (data) =>{
    return{
        type: actionNameHandler.addFolder,
        data
    }
}
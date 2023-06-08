import { actionNameHandler, sideBarFolderHandler } from "../helper/reduxHandler"

export const createFolder = (data) =>{
    return{
        type: actionNameHandler.addFolder,
        data
    }
}

export const editFolder = (id,data) =>{
    return{
        type:actionNameHandler.editFolder,
        data
    }
}   

export const deleteFolder = (id) =>{
    return{
        type : actionNameHandler.deleteFolder,
        data: id
    }
}

export const createSideFolder = (data) =>{
    return{
        type: sideBarFolderHandler.addSideFolder,
        data
    }
}

export const editSideFolder = (id,data) =>{
    return{
        type:sideBarFolderHandler.editSideFolder,
        data
    }
}   

export const deleteSideFolder = (id) =>{
    return{
        type : sideBarFolderHandler.deleteSideFolder,
        data: id
    }
}


export const GeneralFolder = (data) =>{
    return {
        type : actionNameHandler.Genernal,
        data
    }
}

export const sidebarGeneralFolder = (data) =>{
    return {
        type : sideBarFolderHandler.sideBarGenernal,
        data
    }
}

export const folderSearchHandler = (data) =>{
    return {
        type : actionNameHandler.search,
        data
    }
}
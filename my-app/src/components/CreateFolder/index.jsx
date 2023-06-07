import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { createFolder } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';

function CreateFolder() {
    const dispatch = useDispatch();

    const folderTotalData = useSelector((state) => {
        return state.folder.item;
    });

    const newFolderHandler = () =>{
        const data = {
            id: uuidv4(),
            name:`new Folder`
          }
          dispatch(createFolder(data));
          localStorage.setItem("folder",JSON.stringify([...folderTotalData,data]));
    };
  return (
    <div>
      <Button variant='outlined' startIcon={<AddIcon />} onClick={()=>newFolderHandler()}> New Folder </Button>
    </div>
  )
}

export default CreateFolder

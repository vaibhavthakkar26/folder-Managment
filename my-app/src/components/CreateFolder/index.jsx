import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FolderName from '../FolderName';

function CreateFolder() {
    const [modelOpen,setModelOpen] = useState(false);

    // const folderTotalData = useSelector((state) => {
    //     return state.folder.item;
    // });

    const modelCloseHandler = () =>{
      setModelOpen(false);
    }

    const newFolderHandler = () =>{
      setModelOpen(!modelOpen);
    };
  return (
    <div>
      <Button variant='outlined' startIcon={<AddIcon />} onClick={()=>newFolderHandler()}> New Folder </Button>
      <FolderName modelOpen={modelOpen} handleClose={modelCloseHandler}/>
    </div>
  )
}

export default CreateFolder

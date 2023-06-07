import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FolderName from '../FolderName';
import { useSelector } from 'react-redux';

function SideBar() {
    const [modelOpen,setModelOpen] = useState(false);

    const modelCloseHandler = () =>{
        setModelOpen(false);
    }

    const sideFolderData = useSelector((state) => {
        return state.folder.sbFolder;
    });

    console.log("sideFolderData",sideFolderData);

  return (
      <Box maxWidth={"319px"} width={"100%"} display={"flex"} paddingTop={1.2} justifyContent={"space-evenly"}>
        <Typography>LIBRARY</Typography>
        <AddCircleIcon onClick={()=>setModelOpen(true)}/>
        <FolderName modelOpen={modelOpen} handleClose={modelCloseHandler} siderBarFolder={true} editData={null}/>
      </Box>
  )
}

export default SideBar

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Search from '../components/Search';
import CreateFolder from '../components/CreateFolder';

function Home() {
  const dispatch = useDispatch();
  const [folderList,setFolderList] = useState([]);


  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  console.log("folderTotalData",folderTotalData);
  console.log("folderListfolderList",folderList);

  const folderListHandler = () => {
    setFolderList(localStorage.getItem("folder") || []);
  }

  useEffect(()=>{
    folderListHandler()
  },[folderTotalData])
  
  
  return (
    <Box>
      <Box>
        <Typography>
          LIBRARY
        </Typography>
        <AddCircleIcon/>
      </Box>
      <Box>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Select All" />
        </FormGroup>
        <Box>
              <Search/>
              <CreateFolder/>
        </Box>
      </Box>
    </Box>
    // <div>
    //   <button onClick={()=>createFolderHandler()}> Add folder </button>
    // </div>
  )
}

export default Home;

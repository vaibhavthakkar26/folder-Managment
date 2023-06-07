import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Search from '../components/Search';
import CreateFolder from '../components/CreateFolder';
import DisplayFolder from '../components/Folders/DisplayFolder';

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
    <Box display={"flex"}>
      <Box>
        <Typography>
          LIBRARY
        </Typography>
        <AddCircleIcon/>
      </Box>
      
      <Box> {/* Right SIDE */}
        <Box display={"flex"}> {/* NavBar */}
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Select All" />
        </FormGroup>
        <Box display={"flex"}>
              <Search/>
              <CreateFolder/>
        </Box>
        </Box>
        <Box> {/* Display Folders */}
          <DisplayFolder/>
        </Box>
      </Box>
    </Box>
    // <div>
    //   <button onClick={()=>createFolderHandler()}> Add folder </button>
    // </div>
  )
}

export default Home;

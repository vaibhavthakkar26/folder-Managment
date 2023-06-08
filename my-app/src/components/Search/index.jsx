import { TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GeneralFolder, folderSearchHandler } from '../../redux/action';

function Search() {
  const [searchText,setSearchText] = useState("");
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const searchHandler = (e) =>{
   setSearchText(e.target.value);
   if(e.target.value.length >= 1){
     const searchList = folderTotalData.filter((item)=>{
       return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      });
      dispatch(folderSearchHandler(searchList));
    }else{
     const totalFolderData = localStorage.getItem("folder");
     dispatch(GeneralFolder(JSON.parse(localStorage.getItem("folder")))); 
   }
  }
  
  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        size='small'
        onChange={searchHandler}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
    </div>
  )
}

export default Search

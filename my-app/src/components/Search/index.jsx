import { TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

function Search() {
  const [searchText,setSearchText] = useState("");

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const searchHandler = (e) =>{
   setSearchText(e.target.value);
   const searchList = folderTotalData.filter((item)=>{
        return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
   });
   console.log("searchList",searchList);
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

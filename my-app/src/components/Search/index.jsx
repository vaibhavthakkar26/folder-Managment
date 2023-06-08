import { TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GeneralFolder } from '../../redux/action';

function Search() {
  const [searchText,setSearchText] = useState("");
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const searchHandler = (e) =>{
    // console.log("folderTotalData",folderTotalData);
   setSearchText(e.target.value);
  //  if(searchText.length === 0){
  //   dispatch(GeneralFolder(folderTotalData)); 
  //  }
   const searchList = folderTotalData.filter((item)=>{
        return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
   });
   const searchList1 = folderTotalData.filter((item)=>{
    return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  });
  console.log("searchList1",searchList1);
   dispatch(GeneralFolder(searchList)); 
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

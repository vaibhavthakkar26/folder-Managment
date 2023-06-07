import { TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [searchText,setSearchText] = useState("");

  console.log("searchTex",searchText);
  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        size='small'
        onChange={(e)=>setSearchText(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
    </div>
  )
}

export default Search

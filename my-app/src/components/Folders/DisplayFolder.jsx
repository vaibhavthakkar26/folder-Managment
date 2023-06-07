import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import FolderIcon from '@mui/icons-material/Folder';
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { createFolder } from "../../redux/action";



function DisplayFolder({data}) {
  const dispatch = useDispatch();
  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const checkBoxHandler = (event) =>{
    console.log("1",event.target.name);
    console.log("2",event.target.checked);

    const mainData = folderTotalData.map((res)=>{
      if(res.id === data.id){
        return{
          ...res,
          selected: event.target.checked
        }
      }
    //  dispatch(createFolder(res));
      return res;
    });



    
    console.log("data",mainData);
    // const data = {...folderTotalData,[event.target.name]:event.target.checked};
    // console.log("data",mainData);
  };

  return (
    <Box display={"flex"} alignItems={"center"} border={"2px solid black"} width={"28.4%"} padding={2.5} height={"auto"}>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={data.selected} onChange={checkBoxHandler} name="selected"/>} />
      </FormGroup>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data.name} style={{wordWrap:"break-word"}}/>
    </Box>
  );
}

export default DisplayFolder;

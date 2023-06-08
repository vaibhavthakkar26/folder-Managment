import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
  } from "@mui/material";
  import React, { useState } from "react";
  import Avatar from "@mui/material/Avatar";
  import FolderIcon from "@mui/icons-material/Folder";
  import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
  import ListItemText from "@mui/material/ListItemText/ListItemText";
  import { useSelector } from "react-redux";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import FolderName from "../FolderName";
  import {Draggable} from "react-beautiful-dnd";
  
  function SideDisplayFolder({ data ,Width,sideBar,index}) {
    const [editable,setEditable] = useState();
    const [modelOpen, setModelOpen] = useState(false);
  
    const folderTotalData = useSelector((state) => {
      return state.folder.item;
    });
  
    const checkBoxHandler = (event) => {
      const mainData = folderTotalData.map((res) => {
        if (res.id === data.id) {
          return {
            ...res,
            selected: event.target.checked,
          };
        }
        //  dispatch(createFolder(res));
        return res;
      });
    };
  
    const editHandler = () => {
      setEditable(data);
      setModelOpen(true);
    };
  
    const modelCloseHandler = () =>{
      setModelOpen(false);
      setEditable(null);
    }
  
    return (
      <Draggable draggableId={`Folder_GENERAl${index}`} index={index}>
        {
          (provided)=>(
          <Box
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            display={"flex"}
            alignItems={"center"}
            border={"2px solid black"}
            width={Width}
            padding={2.5}
            height={"auto"}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.selected}
                    onChange={checkBoxHandler}
                    name="selected"
                  />
                }
              />
            </FormGroup>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.name} style={{ wordWrap: "break-word" }} />
            <Box>
              <MoreVertIcon onClick={editHandler} />
              <FolderName modelOpen={modelOpen} handleClose={modelCloseHandler} siderBarFolder={sideBar} editData={editable}/>
            </Box>
            {provided.placeholder}
          </Box>
          )
        }
      </Draggable>
    );
  }
  
  export default SideDisplayFolder;
  
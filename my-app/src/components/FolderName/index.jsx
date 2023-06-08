import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createFolder, deleteFolder, editFolder, createSideFolder,editSideFolder,deleteSideFolder} from "../../redux/action";
import { FolderNameBox } from "../../style/Home.style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

function FolderName({ modelOpen, handleClose ,editData,siderBarFolder}) {
  const editFolderData = editData || {}
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const sideFolderData = useSelector((state) => {
    return state.folder.sbFolder;
  });

  useEffect(()=>{
    editDataHandler();
  },[editData]);

  const editDataHandler = () =>{
    setName(editData?.name);
  }

  const deleteHandler = () =>{
    if(siderBarFolder){
      dispatch(deleteSideFolder(editData?.id))
    }else{
      dispatch(deleteFolder(editData?.id));
    }
    handleClose()
  } 

  const saveNameHandler = () => {
    const data = {
      id: editData?.id ? editData?.id : uuidv4(),
      name: name ? name : `new Folder`,
      selected: false,
    };

    if(siderBarFolder){
      if(editData){
        dispatch(editSideFolder(editData?.id,data));
      }else{
        dispatch(createSideFolder(data))
        localStorage.setItem("sideBarFolders", JSON.stringify([...sideFolderData, data]));
      }
    }else if (editData){
      //  TO DO ADD HERE LOCAL STORAGE LOGIC
      dispatch(editFolder(editData?.id,data));
    }else{
        dispatch(createFolder(data));
        localStorage.setItem("folder", JSON.stringify([...folderTotalData, data]));
    }
    handleClose();
  };

  return (
    <Modal
      open={modelOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FolderNameBox>
          <Box>
            <TextField
              id="outlined-basic"
              label="Outlined"
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <Button variant="contained" onClick={() => saveNameHandler()}>
              Save
            </Button>
            {
              editData && <Button variant="contained" onClick={()=>deleteHandler()}> Delete </Button> 
            }
          </Box>
        </FolderNameBox>
      </Box>
    </Modal>
  );
}

export default FolderName;

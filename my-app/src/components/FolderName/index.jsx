import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createFolder } from "../../redux/action";

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

function FolderName({ modelOpen, handleClose }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });


  const saveNameHandler = () => {
    const data = {
      id: uuidv4(),
      name: name ? name : `new Folder`,
      selected: false,
    };
    dispatch(createFolder(data));
    localStorage.setItem("folder", JSON.stringify([...folderTotalData, data]));
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
        <Box display={"flex"} textAlign={"center"} alignItems={"center"}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <Button variant="contained" onClick={() => saveNameHandler()}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default FolderName;

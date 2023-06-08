import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FolderName from "../FolderName";
import { useDispatch, useSelector } from "react-redux";
import DisplayFolder from "../Folders/DisplayFolder";
import { createSideFolder } from "../../redux/action";
import { Droppable } from "react-beautiful-dnd";
import SideDisplayFolder from "../Folders/SideDisplayFolder";

function SideBar() {
  const [modelOpen, setModelOpen] = useState(false);
  const dispatch = useDispatch();

  const modelCloseHandler = () => {
    setModelOpen(false);
  };

  useEffect(() => {
    sideFolderListHandler();
  }, []);

  const sideFolderListHandler = () => {
    const getDataByLs = localStorage.getItem("sideBarFolders");
    if (getDataByLs) {
      const listOfData = JSON.parse(getDataByLs);
      if (listOfData && listOfData.length > 0) {
        listOfData.map((result) => dispatch(createSideFolder(result)));
      }
    }
  };

  const sideFolderData = useSelector((state) => {
    return state.folder.sbFolder;
  });


  return (
    <Box maxWidth={"319px"} width={"100%"}>
      <Box display={"flex"} paddingTop={1.2} justifyContent={"space-evenly"}>
        <Typography>LIBRARY</Typography>
        <AddCircleIcon onClick={() => setModelOpen(true)} />
        <FolderName
          modelOpen={modelOpen}
          handleClose={modelCloseHandler}
          siderBarFolder={true}
          editData={null}
        />
      </Box>
      <Droppable droppableId="SideBar Folder" isCombineEnabled={true}>
        {(provided) => (
          <Box 
          ref={provided.innerRef}
          {...provided.droppableProps}
          display={"flex"} 
          flexWrap={"wrap"} 
          marginTop={1.5} 
          gap={2.5}
          >
            {sideFolderData.map((res,index) => {
              return <DisplayFolder data={res} Width={"60%"} sideBar={true} index={index} />;
            })}
          </Box>
        )}
      </Droppable>
    </Box>
  );
}

export default SideBar;

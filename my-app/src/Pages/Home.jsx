import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Search from "../components/Search";
import CreateFolder from "../components/CreateFolder";
import DisplayFolder from "../components/Folders/DisplayFolder";
import { createFolder } from "../redux/action";

function Home() {
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const selectAllHandler = (event) =>{
    const mainData = folderTotalData.map(item => ({...item,selected:event.target.checked}));
    console.log("MainData",mainData);
  }

  const folderListHandler = () => {
    const localstorageData = localStorage.getItem("folder");
    if (localstorageData) {
      const items = JSON.parse(localstorageData);
      if (items && items.length > 0) { 
        items.map((item) =>dispatch(createFolder(item)));
      }
    }
  };

  useEffect(() => {
    folderListHandler();
  }, []);

  return (
    <Box display={"flex"} maxWidth={"1440px"} margin={"0 auto"}>
      <Box maxWidth={"319px"} width={"100%"} display={"flex"} paddingTop={1.2} justifyContent={"space-evenly"}>
        <Typography>LIBRARY</Typography>
        <AddCircleIcon />
      </Box>

      <Box flex={1}>
        {/* Right SIDE */}
        <Box display={"flex"} justifyContent={"space-between"} paddingBottom={2.5} paddingTop={1.3}>
          {/* NavBar */}
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={selectAllHandler}/>} label="Select All" />
          </FormGroup>
          <Box display={"flex"} gap={1.5}>
            <Search />
            <CreateFolder />
          </Box>
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} alignItems={"stretch"} gap={2.4}>
          {/* Display Folders */}
          {folderTotalData?.map((result) => {
            return <DisplayFolder data={result} />
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

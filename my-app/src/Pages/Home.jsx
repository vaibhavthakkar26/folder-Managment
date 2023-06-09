import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Search from "../components/Search";
import CreateFolder from "../components/CreateFolder";
import DisplayFolder from "../components/Folders/DisplayFolder";
import { GeneralFolder } from "../redux/action";
import SideBar from "../components/SiderBar";
import { Droppable } from "react-beautiful-dnd";
import {
  FolderWrapper,
  MainContainer,
  RightNavBox,
  RightSideContainer,
  SearchBarBox,
} from "../style/Home.style";
function Home() {
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  const selectAllHandler = (event) => {
    const mainData = folderTotalData.map((item) => ({
      ...item,
      selected: event.target.checked,
    }));

    dispatch(GeneralFolder(mainData));
  };

  const folderListHandler = () => {
    const localstorageData = localStorage.getItem("folder");
    if (localstorageData) {
      const items = JSON.parse(localstorageData);
      dispatch(GeneralFolder(items));
    }
  };

  useEffect(() => {
    folderListHandler();
  }, []);

  return (
    <MainContainer>
      <SideBar />
      <RightSideContainer>
        <RightNavBox>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={selectAllHandler} />}
              label="Select All"
            />
          </FormGroup>
          <SearchBarBox display={"flex"} gap={1.5}>
            <Search />
            <CreateFolder />
          </SearchBarBox>
        </RightNavBox>
        <Droppable droppableId="General Folder" isCombineEnabled={true}>
          {(provided) => (
            <FolderWrapper ref={provided.innerRef} {...provided.droppableProps}>
              {/* Display Folders */}
              {folderTotalData?.map((result, index) => {
                return (
                  <DisplayFolder data={result} Width={"28.4%"} index={index} />
                );
              })}
            </FolderWrapper>
          )}
        </Droppable>
      </RightSideContainer>
    </MainContainer>
  );
}

export default Home;

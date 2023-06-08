import { Provider, useDispatch } from 'react-redux';
import Home from './Pages/Home';
import store from './redux/store';
import {DragDropContext} from "react-beautiful-dnd";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GeneralFolder, sidebarGeneralFolder } from './redux/action';



function App() {
  const dispatch = useDispatch();

  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });


  const sideFolderData = useSelector((state) => {
    return state.folder.sbFolder;
  });

  

  const onDragHandler = (result) =>{
    const {source,destination} = result;
    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;
    if(result.destination.droppableId == "General Folder"){
      const dragableData = [...folderTotalData];
      const [removed] = dragableData.splice(result.source.index,1);
      dragableData.splice(result.destination.index,0,removed);
      dispatch(GeneralFolder(dragableData));
    }else{
      const dragableData = [...sideFolderData];
      const [removed] = dragableData.splice(result.source.index,1);
      dragableData.splice(result.destination.index,0,removed);
      dispatch(sidebarGeneralFolder(dragableData));
    }

  }
  return (
    <DragDropContext onDragEnd={onDragHandler}>
      <Home/>
    </DragDropContext>
  );
}

export default App;

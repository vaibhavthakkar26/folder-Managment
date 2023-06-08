import { Provider } from 'react-redux';
import Home from './Pages/Home';
import store from './redux/store';
import {DragDropContext} from "react-beautiful-dnd";

const onDragHandler = (result) =>{
  const {source,destination} = result;
  console.log("source",source);
  console.log("destination",destination);

  if(!destination) return;
  if(destination.droppableId === source.droppableId && destination.index === source.index) return;
  
  

}

function App() {
  return (
    <Provider store={store}>
    <DragDropContext onDragEnd={onDragHandler}>
      <Home/>
    </DragDropContext>
    </Provider>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createFolder } from '../redux/action';

function Home() {
  const dispatch = useDispatch();
  const [folderList,setFolderList] = useState([]);


  const folderTotalData = useSelector((state) => {
    return state.folder.item;
  });

  console.log("folderTotalData",folderTotalData);

  const folderListHandler = () => {
    setFolderList(localStorage.getItem("folder"));
  }

  useEffect(()=>{
    folderListHandler()
  },[folderTotalData])

  

  const createFolderHandler = () =>{
      const data = {
          id: folderTotalData.length +1,
          name:`new Folder${folderTotalData.length+1} `
        }
        dispatch(createFolder(data));
        // setFolderList(data,...folderTotalData);
        localStorage.setItem("folder",JSON.stringify([...folderTotalData,data]));
        console.log("111",[...folderTotalData,data]);
  }

  return (
    <div>
      <button onClick={()=>createFolderHandler()}> Add folder </button>
    </div>
  )
}

export default Home;

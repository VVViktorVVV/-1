import React, { useState, useRef } from "react";


import Table from "./componens/table/table";
import Button from "./componens/button/button";

import creatArrayWithPeriodDays from "./componens/functions/ArrayWithPeriodDays";

import creatGzArrayWithPeriodDays from "./componens/functions/GzArrayWithPeriodDays";
import arrayOrder from "./componens/arrays/arrayOrder";
import creatFinishArray from "./componens/functions/Filter";
// import write from "./componens/functions/SaveToDB";

// import creatFinishArray from "./componens/functions/Filter";







function App() {
  const [users, setUsers] = useState(
    arrayOrder
  )

  const creatFilterArray = () => {
  setUsers(creatFinishArray())
}

  const arrayServer = async () => {
     try {
      const response = await fetch("http://localhost:3003/arrayOrder");
       const users = await response.json();
       setUsers(users)
      // console.log(users);
  } catch (error) {
       console.log(error.message);
  } 
 
  }
  
  const inputFile = useRef(null)

  const onButtonClick = () => {
  // `current` points to the mounted file input element
  inputFile.current.click();
  };
  
  const handleChange = () => {
    alert('The end');
  }
  
  
  return (
    <div className="App">
      <Button el={'Open file'} f={onButtonClick} />
      <Button el={'Фільтр по позбавленням'} f={creatFilterArray} />
      <Button el={'В консоль масив з розбивкою по датам винагорода'} f={creatArrayWithPeriodDays} />
      <Button el={'В консоль масив з розбивкою по датам ГЗ'} f={creatGzArrayWithPeriodDays} />
      <Button el={'Масив з локального серверу на екран'} f={arrayServer}/>
      
           
     
      {/* <button onClick={write}>Запис інфи на сервер</button> */}
      <Table arrayUsers={users} />
      
      <input type='file' id='file' onChange={handleChange} ref={inputFile} style={{display: 'none'}}/>
    </div>
  );
}

export default App;

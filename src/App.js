import React, { useState } from "react";
import Table from "./componens/table/table";

import creatArrayWithPeriodDays from "./componens/functions/ArrayWithPeriodDays";

import creatGzArrayWithPeriodDays from "./componens/functions/GzArrayWithPeriodDays";
import arrayOrder from "./componens/arrays/arrayOrder";
import creatFinishArray from "./componens/functions/Filter";
// import write from "./componens/functions/SaveToDB";
import fetchPostUsers from "./componens/functions/FetchPost";
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
  
  
  return (
    <div className="App">
      <button onClick={creatFilterArray}>Фільтр по позбавленням</button>
      <button onClick={creatArrayWithPeriodDays}>В консоль масив з розбивкою по датам винагорода</button>
      <button onClick={creatGzArrayWithPeriodDays}>В консоль масив з розбивкою по датам ГЗ</button>
      <button onClick={arrayServer}>Масив з локального серверу на екран</button>
      {/* <button onClick={write}>Запис інфи на сервер</button> */}
      <Table arrayUsers={users} />
    </div>
  );
}

export default App;

import React from "react";
import Table from "./componens/table/table";
// import creatFinishArray from "./componens/functions/Filter";
import creatArrayWithPeriodDays from "./componens/functions/ArrayWithPeriodDays";
import arrayGZ from "./componens/arrays/arrayGZ";
import creatGzArrayWithPeriodDays from "./componens/functions/GzArrayWithPeriodDays";
import fetchUsers from "./componens/functions/FetchUsers";






function App() {

  console.log(arrayGZ);
  
  return (
    <div className="App">
      <button onClick={creatArrayWithPeriodDays}>В консоль масив з розбивкою по датам винагорода</button>
      <button onClick={creatGzArrayWithPeriodDays}>В консоль масив з розбивкою по датам ГЗ</button>
      <button onClick={fetchUsers}>Масив з локального серверу на екран</button>
      <Table/>
    </div>
  );
}

export default App;

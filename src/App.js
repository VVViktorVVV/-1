import React from "react";
import Table from "./componens/table/table";
// import creatFinishArray from "./componens/functions/Filter";
import creatArrayWithPeriodDays from "./componens/functions/ArrayWithPeriodDays";






function App() {
  
  return (
    <div className="App">
      <button onClick={creatArrayWithPeriodDays}>В консоль</button>
      <Table/>
    </div>
  );
}

export default App;

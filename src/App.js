import React from "react";
import Table from "./componens/table/table";
import creatFinishArray from "./componens/Filter";






function App() {
  
  return (
    <div className="App">
      <button onClick={creatFinishArray}></button>
      <Table/>
    </div>
  );
}

export default App;

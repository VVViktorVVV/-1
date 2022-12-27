import React from "react";

import Table from "./componens/table/table";





function App() {
  


  return (
    <div className="App">
      {/* {arrayOrder.map(el => <TableItem array={{ id: el.id, name:el.name, day30t: el.day30t, day100t: el.day100t}} />)} */}
      <Table/>
    </div>
  );
}

export default App;

import React from "react";
import Employee from "./Component/Employee/Employee";
import Team from "./Data/Team"
import "./App.scss";

const App = () => {
  return (
    
    <div className = "employees">
           
      <Employee employees={Team} />
    </div>
  
  );
};

export default App;
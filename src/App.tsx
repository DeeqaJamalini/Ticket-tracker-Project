import React from "react";
import Employee from "./Component/Employee/Employee";
import Team from "./Data/Team"

const App = () => {
  return (
    <div>
      <Employee employees={Team} />
    </div>
  );
};

export default App;
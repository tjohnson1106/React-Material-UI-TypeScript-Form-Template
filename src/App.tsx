import React from "react";

import { MainForm } from "./MainForm";
import MainTable from "./MainTable";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <MainForm
        onSubmit={({ email, firstName, lastName }) => {
          console.log(email, firstName, lastName);
        }}
      />
      <MainTable />
    </div>
  );
};

export default App;

import React from "react";

import { MainForm } from "./MainForm";

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
    </div>
  );
};

export default App;

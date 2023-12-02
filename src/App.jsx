import React from "react";
import Home from "./pages/Home";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
};

export default App;

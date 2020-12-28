import React from "react"
import Login from "./components/Login"
import ContextAPI from "./context/ContextAPI";


function App() {
  return (
    <ContextAPI>
      <Login />
    </ContextAPI>
  );
}

export default App;

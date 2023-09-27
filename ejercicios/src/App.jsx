import { useState } from "react";
import "./App.css";
import Navbar from "./assets/Navbar";
import MainView from "./assets/MainView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainView />
    </>
  );
}

export default App;

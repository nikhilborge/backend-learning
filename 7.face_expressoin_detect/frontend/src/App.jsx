import { useState } from "react";
import "./App.css";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/Songs";

function App() {
  const [Songs, setSongs] = useState([]);

  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  );
}

export default App;

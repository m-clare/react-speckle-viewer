import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SpeckleSceneWithHooks from "./SpeckleSceneWithHooks";

function App() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({});
  const token = import.meta.env.VITE_SPECKLE_TOKEN;
  const url = import.meta.env.VITE_SPECKLE_URL;
  console.log(url)
  console.log(token)

  return (
    <div className="App">
      <Box>
        <SpeckleSceneWithHooks token={token} url={url} />
      </Box>
    </div>
  );
}

export default App;

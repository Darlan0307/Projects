import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import Home from "./components/pages/Home";
import Footer from "./components/Footer"
import { useState } from "react";
function App() {
  const [textNewColumn,setTextNewColumn] = useState("");
  const [stateNewColumn,setStateNewColumn] = useState(false);

  return (
    <>
    
    <Box position="relative" style={{ backgroundImage: "linear-gradient(45deg,#8587f3 30%,#fd84ae 100%)" }}>
    <NavBar setTextNewColumn={setTextNewColumn} setStateNewColumn={setStateNewColumn}/>
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" height="100vh" alignContent="flex-start" gap="1rem">
      <Home textNewColumn={textNewColumn} stateNewColumn={stateNewColumn} setTextNewColumn={setTextNewColumn}/>
    </Box>
    </Box>
      <Footer/>
      </>
  );
}

export default App;
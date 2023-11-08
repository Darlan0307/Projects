import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import Home from "./components/pages/Home";
function App() {
  
  return (
    <Box style={{ backgroundImage: "linear-gradient(45deg,#8587f3 30%,#fd84ae 100%)" }}>
    <NavBar/>
    <Box display="flex" justifyContent="center" height="100vh" >
      <Home/>
    </Box>
    </Box>
  );
}

export default App;
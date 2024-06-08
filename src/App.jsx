import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Reviews from "./components/Reviews.jsx";
import MostRequested from "./components/MostRequested.jsx";
import Process from "./components/Process.jsx";
import ActionCall from "./components/ActionCall.jsx";
import About from "./components/About.jsx";
// backgroundColor: "#001c46",
//   backgroundColor: "#2762f8",
const App = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "#f2f5fa" }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        <Hero />
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        <ActionCall />
      </Box>

      <Reviews />

      <MostRequested />

      <Process />
      <About />
    </Box>
  );
};

export default App;

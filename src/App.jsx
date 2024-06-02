import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Reviews from "./components/Reviews.jsx";
import MostRequested from "./components/MostRequested.jsx";
import Process from "./components/Process.jsx";
import ActionCall from "./components/ActionCall.jsx";
const App = () => {
  // backgroundColor: "#001c46",

  //   backgroundColor: "#2762f8",
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
    </Box>
  );
};

export default App;

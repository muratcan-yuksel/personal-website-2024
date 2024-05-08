import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  // backgroundColor: "#001c46",

  //   backgroundColor: "#2762f8",
  return (
    <Box
      sx={{
        backgroundColor: "#f2f5fa",
      }}
    >
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
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "60%",
              lg: "60%",
            },
          }}
        >
          <Hero />
        </Box>
      </Box>
    </Box>
  );
};

export default App;

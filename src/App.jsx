import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          App
        </Box>
      </Box>
    </Box>
  );
};

export default App;

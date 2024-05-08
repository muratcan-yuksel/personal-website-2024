import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevState) => !prevState);
    }, 1000); // Change this interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Run effect only once on component mount
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "5.5em",
          paddingTop: "1em",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#001c46",
                flexGrow: 1,
                fontSize: {
                  xs: "1.35em",
                  sm: "2em",
                  md: "2em",
                },
                fontWeight: "bold",
              }}
            >
              Murat Can Yüksel{" "}
            </Typography>
            {/* line animation */}
            <Box
              sx={{
                height: {
                  xs: "1.8em",
                  md: "2em",
                },
                width: "1.8px",
                backgroundColor: "#001c46",
                display: "inline-block",
                marginLeft: "0.5em",
                opacity: isVisible ? 1 : 0, // Set opacity based on visibility state
                transition: "opacity 0.1s ", // Add transition for smooth fading
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 10,
                backgroundColor: "#001c46",
                color: "white",
                "&:hover": {
                  backgroundColor: "#2762f8",
                  fontWeight: "bold",
                },
                margin: "0 20px",
                fontSize: {
                  xs: "0.8em",
                  sm: "1.5em",
                  md: "1.5em",
                },
              }}
            >
              Work with me
            </Button>{" "}
            <MenuIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

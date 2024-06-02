import React from "react";
import { Box, Typography } from "@mui/material";

const ActionCall = () => {
  return (
    <Box
      id="actionCall"
      sx={{
        width: "100%",
        bgcolor: "#2762f8",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "5em 0",
        padding: "0 0 5em 0",
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
        {" "}
        <Typography
          sx={{
            color: "#whitesmoke",
            textAlign: "center",
            margin: "2em 0 1em 0",
            fontSize: "2em",
            borderBottom: "3px solid whitesmoke",
            fontWeight: "bold",
          }}
        >
          Let's Build the Future Together{" "}
        </Typography>
        <Typography
          sx={{
            color: "#whitesmoke",
            textAlign: "center",
            fontWeight: "medium",
            fontSize: "1.5em",
            marginBottom: "1em",
          }}
        >
          {" "}
          Ready to take your business to the next level with blockchain
          technology? Contact me to discuss your project and see how I can help
          you achieve your goals.{" "}
        </Typography>
        <Typography
          sx={{
            color: "#whitesmoke",
            textAlign: "center",
            fontWeight: "medium",
            fontSize: "1.5em",
          }}
        >
          {" "}
          Write to me at muratcanyukselpro@gmail.com <br></br> or visit my{" "}
          <span
            style={{
              color: "whitesmoke",
            }}
          >
            Top Rated{" "}
          </span>
          Upwork profile to learn more about my work and client testimonials by
          clicking{" "}
          <a
            href="https://www.upwork.com/freelancers/~013e02c0111a99e5d5"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              borderBottom: "1px solid whitesmoke",
              fontSize: "1.5em",
            }}
          >
            here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ActionCall;

import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";

const About = () => {
  const renderIcons = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
          margin: "2em 0",
          fontSize: "2em",
        }}
      >
        <a target="_blank" href="https://www.linkedin.com/in/muratcanyuksel/">
          <LinkedInIcon
            sx={{
              color: "whitesmoke",
              fontSize: "2em",
            }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCP1hJydcsPZCwbn8rPiohsg"
        >
          <YouTubeIcon
            sx={{
              color: "whitesmoke",
              fontSize: "2em",
            }}
          />
        </a>
        <a target="_blank" href="https://github.com/muratcan-yuksel/">
          <GitHubIcon
            sx={{
              color: "whitesmoke",
              fontSize: "2em",
            }}
          />
        </a>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#2762f8",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "5em 0 0 0",
        padding: "0 0 0 0",
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
          Who am I and Where to Find Me
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
          I'm a Bangkok based Full Stack Blockchain developer. I speak English,
          French and Turkish fluently. I have a deep love for animals. In my
          spare time I can be found cruising the streets of Bangkok with my
          surfskate, or practicing Muay Thai at the gym.
        </Typography>
        <Typography
          sx={{
            color: "#whitesmoke",
            textAlign: "center",
            fontSize: "1.5em",
          }}
        >
          {" "}
          You can write to me at muratcanyukselpro@gmail.com <br></br> or find
          me on the following platforms. Don't forget to check my coding
          tutorials on Youtube! Maybe you can find the solution to your problem
          there :)
        </Typography>
        {renderIcons()}
      </Box>
      <Divider
        sx={{
          py: 0,
          width: "100%",
          maxWidth: 360,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      />
      <Typography
        sx={{
          color: "#whitesmoke",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1em",
          margin: "2em 0 1em 0",
        }}
      >
        Made by Murat Can Yüksel with Love
      </Typography>
    </Box>
  );
};

export default About;

import React from "react";
import projects from "../constants/projects";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MostRequested = () => {
  const renderProjects = () => {
    const projectsList = projects.map((project) => (
      <Box
        key={project.title}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          height: "100%",
          padding: "1em 10px",
          //   margin: "1em 0",
          //   background: "#f5f5f5",
          //   borderBottom: "1px solid lightgray",
        }}
      >
        <Accordion
          sx={{
            padding: "1em 10px",
            width: {
              xs: "90%",
              md: "100%",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              {" "}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  justifyContent: "start",
                  alignItems: {
                    xs: "start",
                    md: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2em",
                    marginRight: "1em",
                    fontWeight: "bold",
                    marginBottom: {
                      xs: "0.5em",
                      md: "0",
                    },
                  }}
                >
                  {project.title}:
                </Typography>
                <Typography sx={{ fontSize: "1.2em" }}>
                  {project.description}
                </Typography>
              </Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {project.steps.map((step) => (
              <Box key={step.stepTitle}>
                <Typography
                  sx={{
                    fontSize: "1em",
                    marginRight: "1em",
                    fontWeight: "bold",
                  }}
                >
                  {step.stepTitle}
                </Typography>
                {step.details.map((detail) => (
                  <Typography
                    key={detail}
                    sx={{
                      fontSize: "0.9em",
                      paddingLeft: "1em",
                      margin: "0.5em 0",
                    }}
                  >
                    {" "}
                    {detail}
                  </Typography>
                ))}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    ));

    return projectsList;
  };

  console.log(projects);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#001c46",
        color: "#f5f5f5",
      }}
    >
      {" "}
      {/* title */}
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "60%",
            lg: "60%",
          },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          textAlign: "center",
          fontWeight: "medium",
          marginTop: "2em",

          borderBottom: "3px solid #f5f5f5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "2em",

              width: "auto",
              textAlign: {
                xs: "center",
                lg: "start",
              },
              lineHeight: "1.1em",
            }}
          >
            Most Requested Projects
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "medium",
              fontSize: {
                xs: "0.9em",
                sm: "1.2em",
              },
            }}
          >
            These are the projects most of my clients request. <br />
            If you don't see what you're looking for, no worries. Just contact
            me and I can build your idea for you.
          </Typography>
        </Box>
      </Box>
      {/* title ends */}
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
        {renderProjects()}
      </Box>
    </Box>
  );
};

export default MostRequested;

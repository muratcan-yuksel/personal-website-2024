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
          //   background: "white",
          //   borderBottom: "1px solid lightgray",
        }}
      >
        <Accordion
          sx={{
            padding: "1em 10px",
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
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2em",
                    marginRight: "1em",
                    fontWeight: "bold",
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
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          marginTop: "2em",

          borderBottom: "3px solid #001c46",
        }}
      >
        <Typography
          sx={{
            color: "#001c46",
            fontSize: {
              xs: "1em",
              sm: "2em",
              md: "3em",
            },
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

import { Box, Typography } from "@mui/material";
import hiringProcess from "../constants/hiringProcess";
const Process = () => {
  const renderHiringprocess = () => {
    return hiringProcess.options.map((option) => (
      <Box
        key={option.optionTitle}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          height: "100%",
          padding: "1em 10px",
          margin: "1em 0",
          background: "#f5f5f5",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {option.optionTitle}
        </Typography>
        <Typography>{option.details}</Typography>
      </Box>
    ));
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em 10px",
        margin: "1em 0",
        borderRadius: "10px",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
              borderBottom: "3px solid #001c46",
              marginBottom: "15px",
            }}
          >
            {hiringProcess.title}
          </Typography>
          <Typography>{hiringProcess.description}</Typography>
        </Box>
        {renderHiringprocess()}
      </Box>
    </Box>
  );
};

export default Process;

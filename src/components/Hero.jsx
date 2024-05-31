import { Box, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import StarsIcon from "@mui/icons-material/Stars";
import Help from "./Help";
const Hero = () => {
  return (
    <Box>
      {/* title */}
      <Box
        sx={
          {
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   flexDirection: "column",
          }
        }
      >
        <Typography
          sx={{
            color: "#001c46",
            fontSize: { xs: "2.5em", sm: "3.5em", md: "5.5em" },
            width: "100%",
            textAlign: {
              xs: "center",
            },
            lineHeight: "1.1em",
          }}
        >
          Full-stack
          <span
            style={{
              color: "#2762f8",
            }}
          >
            {""} blockchain {""}
          </span>
          development
          <span
            style={{
              color: "#2762f8",
            }}
          >
            .
          </span>
        </Typography>
      </Box>
      {/* h2 */}
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: {
            xs: "1em",
            sm: "2em",
          },
          marginTop: "0.5em",
          marginBottom: "0.5em",
        }}
        variant="h6"
      >
        Transforming Ideas into Secure, Scalable Blockchain Solutions{" "}
      </Typography>

      {/* paragraph */}
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: {
            xs: "0.9em",
            sm: "1.2em",
          },
        }}
        variant="h6"
      >
        With extensive expertise in blockchain technology, I specialize in
        developing robust and innovative solutions tailored to your business
        needs. My goal is to guide you through the complexities of blockchain
        technology and help you leverage its full potential to achieve your
        business objectives.
      </Typography>
      <Help />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SouthIcon
          sx={{ color: "#2762f8", fontSize: "2em", marginTop: "1em" }}
        />
      </Box>
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1.5em",
        }}
      >
        {" "}
        Write me on muratcanyukselpro@gmail.com <br></br> or visit my{" "}
        <span
          style={{
            color: "#2762f8",
          }}
        >
          Top Rated{" "}
        </span>
        Upwork profile by clicking{" "}
        <a
          href="https://www.upwork.com/freelancers/~013e02c0111a99e5d5"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#2762f8",
            borderBottom: "1px solid #2762f8",
          }}
        >
          here
        </a>
      </Typography>
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1.5em",
        }}
      >
        {" "}
      </Typography>
    </Box>
  );
};

export default Hero;

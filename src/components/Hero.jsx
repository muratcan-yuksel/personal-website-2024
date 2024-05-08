import { Box, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

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
            fontSize: "2.5em",
            textAlign: "center",
          }}
          variant="h6"
        >
          Full-stack{" "}
          <Box
            sx={{
              color: "#2762f8",
            }}
          >
            blockchain
          </Box>
          development.
        </Typography>
      </Box>
      {/* h2 */}
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1.5em",
        }}
        variant="h6"
      >
        Heading 2
      </Typography>

      {/* paragraph */}
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "0.9em",
        }}
        variant="h6"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis
        doloribus est amet explicabo omnis error dicta, aperiam inventore rerum
        assumenda id, recusandae voluptatibus fugiat officiis natus corporis
        provident enim!
      </Typography>
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
        Write me on muratcanyukselpro@gmail.com{" "}
      </Typography>
    </Box>
  );
};

export default Hero;

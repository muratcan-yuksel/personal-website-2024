import { Box, ListItemText, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Why = () => {
  const offers = [
    {
      title: "Expertise in Blockchain Technology",
      description:
        " I specialize in developing decentralized applications (DApps), smart contracts, and blockchain platforms tailored to your business needs.",
    },
    {
      title: "Full-Stack Development",
      description:
        "From front-end to back-end, I provide comprehensive development services ensuring a seamless and integrated solution.",
    },
    {
      title: "Security and Scalability",
      description:
        "My focus is on building secure, scalable, and efficient blockchain solutions that grow with your business.",
    },
    {
      title: "Customized Solutions",
      description:
        " I understand that every business is unique. I offer personalized services to meet your specific requirements and goals.",
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          marginTop: "2em",
          fontSize: "2em",

          borderBottom: "3px solid #001c46",
        }}
        variant="h6"
      >
        Why You'll Love Working with Me{" "}
      </Typography>
      <Box>
        <List
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
            },
          }}
        >
          {offers.map((offer, index) => (
            <Box key={index}>
              <Box>
                {" "}
                <Box
                  sx={{
                    padding: "1em 1em 1em 0.5em ",
                    backgroundColor: "white",
                    // "&:hover": {
                    //   backgroundColor: "#e0e0e0", // Darker color on hover
                    // },
                    fontSize: "1.5em",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2762f8",
                      fontWeight: "bold",
                      margin: 0,
                      fontSize: "0.8em",
                    }}
                  >
                    {offer.title}:
                    <span style={{ color: "#001c46", fontWeight: "normal" }}>
                      {offer.description}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Why;

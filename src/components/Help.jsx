import { Box, ListItemText, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Help = () => {
  const offers = [
    {
      title: "Smart Contract Development",
      description:
        "Secure and reliable smart contracts for various blockchain platforms like Ethereum, Binance Smart Chain, and more.",
    },
    {
      title: "DApp Development",
      description:
        "User-friendly and feature-rich decentralized applications to leverage the power of blockchain.",
    },
    {
      title: "Blockchain Consulting",
      description:
        "Expert advice on blockchain strategy, technology selection, and implementation.",
    },
    {
      title: "Integration Services",
      description:
        "Seamless integration of blockchain technology with your existing systems and processes.",
    },
  ];

  return (
    <div>
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          marginTop: "2em",
          fontSize: {
            xs: "1em",
            sm: "2em",
            md: "3em",
          },
        }}
        variant="h6"
      >
        I can help you with
      </Typography>
      <Box>
        <List
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          {offers.map((offer, index) => (
            <ListItem key={index}>
              <Card
                variant="outlined"
                sx={{
                  padding: "1em",
                  minHeight: "150px",
                }}
              >
                <Typography sx={{ color: "#2762f8", fontWeight: "bold" }}>
                  {offer.title}
                </Typography>
                <br />
                <Typography>{offer.description}</Typography>
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default Help;

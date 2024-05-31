import { Box, ListItemText, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Help = () => {
  return (
    <div>
      <Typography
        sx={{
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: {
            xs: "1em",
            sm: "2em",
          },
        }}
        variant="h6"
      >
        I can help you with
      </Typography>
      <Box>
        <Typography sx={{ color: "#001c46" }}>
          Call us @ 123-456-7890
        </Typography>
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
          <ListItem>
            <ListItemText sx={{ color: "#001c46" }}>
              <Card
                variant="outlined"
                sx={{
                  padding: "1em",
                }}
              >
                {" "}
                <Typography sx={{ color: "#2762f8", fontWeight: "bold" }}>
                  Smart Contract Development
                </Typography>{" "}
                <br></br>
                <Typography sx={{}}>
                  Secure and reliable smart contracts for various blockchain
                  platforms like Ethereum, Binance Smart Chain, and more.{" "}
                </Typography>{" "}
              </Card>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ color: "#001c46" }}>
              DApp Development: User-friendly and feature-rich decentralized
              applications to leverage the power of blockchain.{" "}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ color: "#001c46" }}>
              Blockchain Consulting: Expert advice on blockchain strategy,
              technology selection, and implementation.{" "}
            </ListItemText>
          </ListItem>{" "}
          <ListItem>
            <ListItemText sx={{ color: "#001c46" }}>
              Integration Services: Seamless integration of blockchain
              technology with your existing systems and processes.
            </ListItemText>
          </ListItem>
        </List>{" "}
      </Box>
    </div>
  );
};

export default Help;

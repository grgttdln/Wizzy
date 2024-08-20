import { Box, Typography, Stack, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Sidebar from "../components/sidebar";
import Cards from "../components/cards";
import AccountHolder from "../components/account_holder";
import CardsStats from "../components/cards_stats";

export default function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEF4FE",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Outer box */}
      <Stack direction={"row"}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <Box
          sx={{
            height: "100vh",
            width: "77vw",
            backgroundColor: "#EEF4FE",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Stack>
            {/* Account Header */}

            <AccountHolder />

            {/* Cards Stats */}

            <CardsStats />

            {/* Cards */}
            <Stack
              marginTop={"3%"}
              direction={"row"}
              sx={{ alignItems: "center", display: "flex" }}
            >
              <Typography
                className="raleway-700"
                fontSize={"24px"}
                color={"#003875"}
              >
                Continue Learning
              </Typography>

              <Stack direction={"row"} spacing={1} sx={{ marginLeft: "auto" }}>
                <Button
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0",
                    minWidth: "auto",
                  }}
                >
                  <ArrowBackIosIcon sx={{ color: "#003875" }} />
                </Button>
                <Button
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0",
                    minWidth: "auto",
                  }}
                >
                  <ArrowForwardIosIcon sx={{ color: "#003875" }} />
                </Button>
              </Stack>
            </Stack>
            {/* Card Display */}
            <Stack
              direction={"row"}
              marginTop={"2%"}
              spacing={2}
              sx={{ alignItems: "center", display: "flex" }}
            >
              <Cards title="Chello" />
              <Cards title="hi" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

"use client";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardsWide from "../components/cards_wide";
import Sidebar from "../components/sidebar";
import AccountHolder from "../components/account_holder";
import { useRouter } from "next/navigation";

export default function Cards() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEF4FE",
        minHeight: "100vh",
        width: "100vw",
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
            overflow: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Box sx={{ width: "75vw" }}>
            <AccountHolder />
          </Box>
          <Stack marginX={"4%"} marginTop={"2%"}>
            <Typography
              className="raleway-700"
              fontSize={48}
              color={"#003875"}
              marginBottom={"20px"}
            >
              Create a Flashcard
            </Typography>
            <TextField
              id="standard-basic"
              label="Enter a Topic"
              variant="standard"
              sx={{
                fontSize: "20px",
                width: "55%",
                "& .MuiInputBase-input": {
                  color: "#003875",
                  fontSize: "1.4rem",
                },
                "& .MuiInputLabel-root": {
                  color: "#003875",
                  fontSize: "1.5rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#003875",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#003875",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#003875",
                },
              }}
            />
            <Button
              className="raleway-600"
              sx={{
                marginTop: "30px",
                width: "55%",
                backgroundColor: "#003875",
                color: "#DDEEF8",
                borderRadius: "10px",
                padding: "10px 40px",
              }}
            >
              Create
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

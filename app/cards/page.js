import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardsWide from "../components/cards_wide";
import Sidebar from "../components/sidebar";
import AccountHolder from "../components/account_holder";

export default function Sample() {
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
          }}
        >
          <Box sx={{ width: "75vw" }}>
            <AccountHolder />
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginX={"4%"}
            marginTop={"2%"}
          >
            <Typography className="raleway-700" fontSize={48} color={"#003875"}>
              Continue Learning
            </Typography>
            <Stack direction={"column"} alignItems={"flex-end"}>
              <TextField
                id="standard-basic"
                label="type or search a card"
                variant="standard"
                sx={{
                  width: "200%",
                  "& .MuiInputBase-root": {
                    color: "#003875",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#003875",
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "#003875" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                className="raleway-400"
                color={"#003875"}
                sx={{ width: "200%", marginTop: "1%" }}
              >
                FILTER FLASHCARDS
              </Typography>
            </Stack>
          </Stack>

          <Stack
            marginX={"4%"}
            marginTop={"2%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            sx={{
              overflow: "visible",
            }}
          >
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
            <CardsWide title="sample" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

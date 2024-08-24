"use client";
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  ButtonBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardsWide from "../components/cards_wide";
import Sidebar from "../components/sidebar";
import AccountHolder from "../components/account_holder";
import { useRouter } from "next/navigation";
import withAuth from "../../utils/withAuth";
import { useAuth } from "../../AuthContext";

const Cards = () => {
  const { user } = useAuth();

  const router = useRouter();

  const handleClick = () => {
    router.push("/create_cards");
    console.log("Create New Flashcards button clicked!");
  };

  return (
    <>
      {user ? (
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
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                marginX={"4%"}
                marginTop={"2%"}
              >
                <Typography
                  className="raleway-700"
                  fontSize={48}
                  color={"#003875"}
                >
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
                {/* Add New Card */}
                <ButtonBase onClick={handleClick}>
                  <Stack
                    direction={"row"}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "25px",
                      padding: "20px",
                      width: "70vw",
                      height: "15vh",
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      className="raleway-700"
                      fontSize={"24px"}
                      color={"#003875"}
                      marginRight={"1%"}
                    >
                      Create New Flashcards
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#003875"
                    >
                      <path d="M447.07-278.41h69.86v-164h164.66v-69.85H516.93v-169.33h-69.86v169.33H278.41v69.85h168.66v164ZM480.2-73.3q-84.44 0-158.48-31.96-74.03-31.96-129.27-87.19-55.23-55.24-87.19-129.3Q73.3-395.82 73.3-480.31q0-84.5 31.96-158.58 31.96-74.09 87.17-129t129.28-86.94q74.08-32.03 158.59-32.03t158.61 32.02q74.11 32.02 129 86.91 54.9 54.88 86.92 129.08 32.03 74.2 32.03 158.67 0 84.46-32.03 158.5-32.03 74.03-86.94 129.12t-129.08 87.17Q564.64-73.3 480.2-73.3Zm.13-75.76q138.05 0 234.33-96.51 96.28-96.52 96.28-234.76 0-138.05-96.16-234.33-96.15-96.28-234.86-96.28-137.79 0-234.33 96.16-96.53 96.15-96.53 234.86 0 137.79 96.51 234.33 96.52 96.53 234.76 96.53ZM480-480Z" />
                    </svg>
                  </Stack>
                </ButtonBase>

                {/* Cards */}
                <CardsWide title="sample" />
                <CardsWide title="sample" />
              </Stack>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Box>Loding</Box>
      )}
    </>
  );
};

export default withAuth(Cards);

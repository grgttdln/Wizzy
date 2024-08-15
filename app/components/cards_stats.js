import { Box, Typography, Stack, Button } from "@mui/material";

export default function CardsStats() {
  return (
    <>
      {/* First Box */}
      <Box
        sx={{
          color: "white",
          backgroundColor: "#6E62E5",
          minHeight: "20vh",
          width: "73vw",
          borderRadius: "25px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            marginLeft: "5%",
          }}
        >
          <Typography className="raleway-600" fontSize={"20px"}>
            App Name
          </Typography>
          <Typography
            className="raleway-600"
            fontSize={"36px"}
            marginTop={"15px"}
            lineHeight={"45px"}
            marginRight={"25%"}
          >
            AI-powered flashcards to help you master any subject, anytime,
            anywhere.
          </Typography>
        </Stack>
      </Box>

      {/* 3 Boxes */}

      <Stack direction={"row"} spacing={3} marginTop={"2%"}>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#EFE4A9",
            minHeight: "32vh",
            width: "23.4vw",
            borderRadius: "25px",
          }}
        >
          <Stack marginTop={"2%"} marginLeft={"12%"}>
            <Typography
              className="raleway-700"
              fontSize={"78px"}
              color={"#000000"}
            >
              0
            </Typography>
            <Typography
              className="raleway-500"
              fontSize={"24px"}
              color={"#000000"}
            >
              created cards
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#C4DEB5",
            minHeight: "32vh",
            width: "23.4vw",
            borderRadius: "25px",
          }}
        >
          <Stack marginTop={"2%"} marginLeft={"12%"}>
            <Typography
              className="raleway-700"
              fontSize={"78px"}
              color={"#000000"}
            >
              0
            </Typography>
            <Typography
              className="raleway-500"
              fontSize={"24px"}
              color={"#000000"}
            >
              studied cards
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#F4C6F5",
            minHeight: "32vh",
            width: "23.4vw",
            borderRadius: "25px",
          }}
        >
          <Stack marginTop={"2%"} marginLeft={"12%"}>
            <Typography
              className="raleway-700"
              fontSize={"78px"}
              color={"#000000"}
            >
              0
            </Typography>
            <Typography
              className="raleway-500"
              fontSize={"24px"}
              color={"#000000"}
            >
              exported cards
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

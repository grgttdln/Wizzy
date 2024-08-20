import { Box, Typography, Stack, Button } from "@mui/material";
export default function CardsWide({ ...props }) {
  return (
    <Box>
      <Stack
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
        <Typography className="raleway-700" fontSize={"24px"} color={"#003875"}>
          sample
        </Typography>
      </Stack>
    </Box>
  );
}

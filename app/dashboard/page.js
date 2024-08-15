import { Box, Typography, Stack, Button } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      {/* Outer box */}
      <Stack>
        {/* Sidebar */}
        <Box
          style={{ height: "100vh", width: "15vw", backgroundColor: "#FAFCFF" }}
        ></Box>

        {/* Main content */}
        <Box></Box>
      </Stack>
    </>
  );
}

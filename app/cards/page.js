import { Box, Typography, Stack, Button } from "@mui/material";

import Sidebar from "../components/sidebar";

export default function Cards() {
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
          }}
        >
          <Typography>Cards</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

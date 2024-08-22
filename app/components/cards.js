"use client";
import { Box, Typography, Stack, Button, ButtonBase } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Cards({ ...props }) {
  const router = useRouter();

  const handleClick = () => {
    const formattedTitle = encodeURIComponent(props.title);
    router.push(`/details/${formattedTitle}`);
    console.log("Create New Flashcards button clicked!");
  };

  return (
    <ButtonBase onClick={handleClick}>
      <Box>
        <Stack
          sx={{
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "20px",
            width: "30vw",
            height: "25vh",
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
          >
            {props.title}
          </Typography>
        </Stack>
      </Box>
    </ButtonBase>
  );
}

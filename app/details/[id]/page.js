"use client";
import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  ButtonBase,
} from "@mui/material";
import Sidebar from "../../components/sidebar";
import AccountHolder from "../../components/sidebar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import withAuth from "../../../utils/withAuth";
import { useAuth } from "../../../AuthContext";

const Details = async () => {
  const { user } = useAuth();
  const params = useParams();

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

        <Stack
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginX={"13%"}
        >
          {/* Title and Buttons Holder */}
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width="100%"
            alignItems="center"
            marginBottom={"10%"}
          >
            {/* Title */}
            <Typography
              className="raleway-700"
              fontSize={"40px"}
              color={"#003875"}
              sx={{ marginRight: "auto" }}
            >
              {params.id}
            </Typography>

            {/* Buttons */}
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
          <Stack
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Card Main */}
            <ButtonBase>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  padding: "20px",
                  width: "50vw",
                  height: "50vh",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="raleway-600"
                  fontSize={"30px"}
                  color={"#003875"}
                >
                  question
                </Typography>
              </Box>
            </ButtonBase>
          </Stack>
          <Button
            className="raleway-600"
            sx={{
              marginTop: "50px",
              width: "50vw",
              height: "5vh",
              backgroundColor: "#003875",
              color: "#DDEEF8",
              borderRadius: "10px",
              padding: "10px 40px",
            }}
          >
            Mark Cards as Studied
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default withAuth(Details);

import { Box, Typography, Stack, Button, Link } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ExtensionIcon from "@mui/icons-material/Extension";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "23vw",
          backgroundColor: "white",
          borderTopRightRadius: "45px",
          borderBottomRightRadius: "45px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          <Typography
            className="raleway-600"
            color={"#939393"}
            sx={{ padding: "8px 16px", fontSize: "14px" }}
          >
            OVERVIEW
          </Typography>

          <Link
            href="/dashboard"
            sx={{
              backgroundColor: "white",
              color: "#003875",
              padding: "8px 16px",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SpaceDashboardIcon sx={{ fontSize: "30px" }} />
              <Typography className="raleway-600" fontSize={"16px"}>
                Dashboard
              </Typography>
            </Stack>
          </Link>
          <Link
            href="/cards"
            className="raleway-400"
            sx={{
              textDecoration: "none",
              backgroundColor: "white",
              color: "#003875",
              padding: "8px 16px",
              gap: "5px",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ExtensionIcon sx={{ fontSize: "30px" }} />
              <Typography className="raleway-600" fontSize={"16px"}>
                Cards
              </Typography>
            </Stack>
          </Link>
        </Stack>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "auto",
          }}
        >
          <Link
            className="raleway-400"
            sx={{
              backgroundColor: "white",
              color: "#BB271A",
              padding: "8px 16px",
              textDecoration: "none",
              gap: "5px",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LogoutIcon sx={{ fontSize: "30px" }} />
              <Typography className="raleway-600" fontSize={"16px"}>
                Log out
              </Typography>
            </Stack>
          </Link>
        </Box>
      </Box>
    </>
  );
}

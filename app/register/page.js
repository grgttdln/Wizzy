import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Register() {
  return (
    <>
      <Box style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Image
          src="/bg-login.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          style={{ zIndex: -1, opacity: 0.7 }}
        />
        <Stack
          direction={"row"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "95vw",
            height: "95vh",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FAFCFF",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          {/* Image */}
          <Box
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/card.png"
              width={200}
              height={200}
              quality={100}
              alt="Logo"
            />
          </Box>
          {/* Register */}
          <Box
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Stack spacing={2} style={{ width: "80%" }}>
              <Typography
                variant="h3"
                color={"#003875"}
                className="raleway-600"
              >
                Register
              </Typography>
              <Typography
                variant="h5"
                color={"#003875"}
                className="raleway-200"
              >
                Register to access app name
              </Typography>
              <Box>
                <Stack direction={"row"} spacing={2} marginTop={"15px"}>
                  <Button
                    className="raleway-400"
                    sx={{
                      backgroundColor: "#DDEEF8",
                      color: "#003875",
                      borderRadius: "10px",
                      padding: "18px 40px",
                      gap: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <GoogleIcon sx={{ fontSize: "30px" }} />
                      <Typography className="raleway-300" fontSize={"14px"}>
                        Sign in with Google
                      </Typography>
                    </Stack>
                  </Button>
                  <Button
                    className="raleway-400"
                    sx={{
                      backgroundColor: "#DDEEF8",
                      color: "#003875",
                      borderRadius: "10px",
                      padding: "18px 40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: "30px" }} />{" "}
                  </Button>
                </Stack>

                <Stack marginTop={"35px"}>
                  <Box style={{ width: "100%" }}>
                    <Typography color={"#003875"} className="raleway-400">
                      EMAIL
                    </Typography>
                    <input
                      type="email"
                      className="raleway-300"
                      placeholder="Email"
                      style={{
                        width: "100%",
                        padding: "10px 0px",
                        border: "none",
                        borderBottom: "2px solid #003875",
                        outline: "none",
                        borderRadius: "0",
                        fontSize: "16px",
                        color: "#003875",
                      }}
                    />
                  </Box>
                  <Box marginTop={"20px"} style={{ width: "100%" }}>
                    <Typography color={"#003875"} className="raleway-400">
                      PASSWORD
                    </Typography>
                    <input
                      type="password"
                      className="raleway-300"
                      placeholder="Password"
                      style={{
                        width: "100%",
                        padding: "10px 0px",
                        border: "none",
                        fontSize: "16px",
                        borderBottom: "2px solid #003875",
                        outline: "none",
                        borderRadius: "0",
                        color: "#003875",
                      }}
                    />
                  </Box>

                  <Button
                    className="raleway-400"
                    sx={{
                      marginTop: "30px",
                      width: "100%",
                      backgroundColor: "#003875",
                      color: "#DDEEF8",
                      borderRadius: "10px",
                      padding: "10px 40px",
                    }}
                  >
                    Register
                  </Button>
                  <Stack
                    marginTop={"25px"}
                    sx={{ color: "#003875" }}
                    direction={"row"}
                  >
                    <Typography marginRight={"8px"} className="raleway-300">
                      Already have an account?
                    </Typography>
                    <i className="raleway-300">
                      <Link href="/login">Login Here</Link>
                    </i>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

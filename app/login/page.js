"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, googleProvider, githubProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (signInError) {
      setError("Invalid email or password");
    } else {
      setError("");
    }
  }, [signInError]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        setEmail("");
        setPassword("");
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const email = result.user.email;
        setValue(email);
        localStorage.setItem("email", email);

        router.push("/dashboard");
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const SignInWithGithubHandler = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const email = result.user.email;
        setValue(email);
        localStorage.setItem("email", email);

        router.push("/dashboard");
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
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
            src="/wizzylogo.png"
            width={600}
            height={600}
            quality={100}
            alt="Logo"
          />
        </Box>
        {/* Login */}
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
            <Typography variant="h3" color={"#003875"} className="raleway-600">
              Login
            </Typography>
            <Typography variant="h5" color={"#003875"} className="raleway-200">
              Login to access Wizzy
            </Typography>
            <Box>
              <Box
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* Google */}
                <Stack direction={"row"} spacing={2} marginTop={"15px"}>
                  <Button
                    onClick={handleGoogleSignIn}
                    className="raleway-400"
                    sx={{
                      backgroundColor: "#DDEEF8",
                      color: "#003875",
                      borderRadius: "10px",
                      padding: "18px 80px",
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
                </Stack>
                {/* Github */}
                <Stack direction={"row"} spacing={2} marginTop={"15px"}>
                  <Button
                    onClick={SignInWithGithubHandler}
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
                      <GitHubIcon sx={{ fontSize: "30px" }} />{" "}
                      <Typography className="raleway-300" fontSize={"14px"}>
                        Sign in with Github
                      </Typography>
                    </Stack>
                  </Button>
                </Stack>
              </Box>
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? "Signing in..." : "Login"}
                </Button>
                <Stack
                  marginTop={"25px"}
                  sx={{ color: "#003875" }}
                  direction={"row"}
                >
                  <Typography marginRight={"8px"} className="raleway-300">
                    Don&apos;t have an account?
                  </Typography>
                  <i className="raleway-300">
                    <Link href="/register">Register Here</Link>
                  </i>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

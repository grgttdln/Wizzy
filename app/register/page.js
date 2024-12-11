"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth, googleProvider, githubProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, signUpError] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const [value, setValue] = useState("");

  const SignInWithGoogleHandler = () => {
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

  useEffect(() => {
    if (signUpError) {
      // Check Firebase error codes for more specific messages
      if (signUpError.code === "auth/weak-password") {
        setError("Password is too weak. Please use a stronger password.");
      } else if (signUpError.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please use a different email.");
      } else {
        setError("Failed to create an account");
      }
    } else {
      setError("");
    }
  }, [signUpError]);

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
              src="/wizzylogo.png"
              width={600}
              height={600}
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
                Register to access Wizzy
              </Typography>
              <Box>
                <Stack direction={"row"} spacing={2} marginTop={"15px"}>
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
                        onClick={SignInWithGoogleHandler}
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
                </Stack>

                <Stack marginTop={"35px"}>
                  <Box style={{ width: "100%" }}>
                    <Typography color={"#003875"} className="raleway-400">
                      ENTER YOUR EMAIL
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
                      CREATE A PASSWORD
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

                  <Box marginTop={"20px"} style={{ width: "100%" }}>
                    <Typography color={"#003875"} className="raleway-400">
                      CONFIRM PASSWORD
                    </Typography>
                    <input
                      type="password"
                      className="raleway-300"
                      placeholder="Confirm Password"
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                    onClick={handleSignUp}
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

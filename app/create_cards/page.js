"use client";
import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import Sidebar from "../components/sidebar";
import AccountHolder from "../components/account_holder";
import withAuth from "../../utils/withAuth";
import { useAuth } from "../../AuthContext";
import { saveQuestions } from "../api/save/route.mjs";

const Cards = () => {
  const { user } = useAuth();
  const [topic, setTopic] = useState("");
  const [setOfQuestions, setSetOfQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setTopic(event.target.value);
  };

  // Creating Question
  const generateQuestions = async (subject) => {
    setIsLoading(true);

    try {
      console.log("Sending request...");
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Generate a list of 10 question and answer pairs in JSON format, focusing on basic concepts in ${subject}. The list should be a JSON object with a key 'questions' containing a list of dictionaries, where each dictionary has a 'question' and an 'answer' key. Ensure the questions and answers are accurate and avoid any ambiguity.`,
            },
          ],
          systemPrompt: `Please assist the user with generating accurate and relevant ${subject}-related questions.`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Results
      const text = await response.text();

      try {
        const parsedResult = JSON.parse(text);
        setSetOfQuestions(parsedResult);

        // Save questions in Firebase
        saveQuestions(user.uid, topic, text);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <Box
          sx={{
            height: "100vh",
            width: "77vw",
            backgroundColor: "#EEF4FE",
            overflow: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Box sx={{ width: "75vw" }}>
            <AccountHolder username={user.email} />
          </Box>
          <Stack marginX={"4%"} marginTop={"2%"}>
            <Typography
              className="raleway-700"
              fontSize={48}
              color={"#003875"}
              marginBottom={"20px"}
            >
              Create a Flashcard
            </Typography>
            <TextField
              id="standard-basic"
              label="Enter a Topic"
              variant="standard"
              value={topic}
              onChange={handleInputChange}
              sx={{
                fontSize: "20px",
                width: "55%",
                "& .MuiInputBase-input": {
                  color: "#003875",
                  fontSize: "1.4rem",
                },
                "& .MuiInputLabel-root": {
                  color: "#003875",
                  fontSize: "1.5rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#003875",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#003875",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#003875",
                },
              }}
            />
            <Button
              onClick={() => {
                generateQuestions(topic);
              }}
              className="raleway-600"
              sx={{
                marginTop: "30px",
                width: "55%",
                backgroundColor: "#003875",
                color: "#DDEEF8",
                borderRadius: "10px",
                padding: "10px 40px",
              }}
            >
              Create
            </Button>
          </Stack>
          {/* Sample */}
          {}
          <Box></Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default withAuth(Cards);

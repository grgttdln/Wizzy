"use client";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography, Stack, Button, ButtonBase } from "@mui/material";
import Sidebar from "../../components/sidebar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import withAuth from "../../../utils/withAuth";
import { useAuth } from "../../../AuthContext";
import { useState, useEffect } from "react";
import { updateCards } from "../../api/save/route.mjs";
import { firestore } from "../../../firebase"; 
import { doc, updateDoc } from "firebase/firestore";// Import Firebase configuration

const Details = () => {
  const { user } = useAuth();
  const params = useParams();
  const [cards, setCards] = useState({});
  const [loading, setLoading] = useState(true);
  const [specificCard, setSpecificCard] = useState({});
  const [idx, setIdx] = useState(0);
  const router = useRouter(); // Initialize useRouter
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");
  const [boop, setBoop] = useState(false);

  const handleCardNextClick = () => {
    setBoop(false); // Ensure the question mode is reset
    const newIndex = idx < specificCard[topic].length - 1 ? idx + 1 : 0; // Calculate the next index
    setIdx(newIndex); // Update the index
    setText(specificCard[topic][newIndex]["question"]); // Update the text with the new question
  };
  
  const handleCardPrevClick = () => {
    setBoop(false); // Ensure the question mode is reset
    const newIndex = idx > 0 ? idx - 1 : specificCard[topic].length - 1; // Calculate the previous index
    setIdx(newIndex); // Update the index
    setText(specificCard[topic][newIndex]["question"]); // Update the text with the new question
  };
  

  const showAnswer = () => {
    if (boop) {
      setText(specificCard[topic][idx]["question"]);
    } else {
      setText(specificCard[topic][idx]["answer"]);
    }
    setBoop(!boop);
  };
  
  const markCardAsStudied = async () => {
    try {
      const userID = user?.uid; // Ensure user ID is available
      const cardName = decodeURIComponent(params.id); // Decode the topic name
  
      if (!userID || !cardName) {
        throw new Error("User ID or card name is missing.");
      }
  
      // Reference to the specific card document
      const cardRef = doc(firestore, "cards", userID, "card", cardName.toLowerCase());
  
      // Update the "studied" field to true
      await updateDoc(cardRef, {
        studied: true,
      });
  
      alert("Card marked as studied!");
      router.push("/cards");
    } catch (error) {
      console.error("Error marking card as studied:", error.message);
      alert("Failed to mark card as studied. Please try again.");
    }
  };
  
  

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const userID = user.uid;
        const cardList = await updateCards(userID);
  
        const parsedCardList =
          typeof cardList === "string" ? JSON.parse(cardList) : cardList;
  
        setCards(parsedCardList);
  
        const decodedTopic = decodeURIComponent(params.id.toLowerCase());
        setTopic(decodedTopic);
  
        const specificCard = parsedCardList.find(
          (category) => category.name === decodedTopic
        );
  
        if (specificCard) {
          setSpecificCard(specificCard);
          setText(specificCard[decodedTopic][0]["question"]);
        } else {
          console.error("No matching topic found.");
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };
  
    if (user?.uid) {
      fetchCards();
    }
  }, [user.uid]);
  

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
          {/* Return Button */}
          <Button
            className="raleway-600"
            onClick={() => router.push("/cards")} // Redirect to /cards
            sx={{
              alignSelf: "flex-start",
              marginBottom: "20px",
              backgroundColor: "#003875",
              color: "#DDEEF8",
              borderRadius: "10px",
              padding: "10px 20px",
              ":hover": {
                backgroundColor: "#002952",
              },
            }}
          >
            Return
          </Button>
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
              fontSize="40px"
              color="#003875"
              sx={{
                marginRight: "auto",
              }}
            >
              {decodeURIComponent(params.id)}
            </Typography>


            {/* Buttons */}
            <Stack direction={"row"} spacing={1} sx={{ marginLeft: "auto" }}>
              <Button
                onClick={handleCardPrevClick}
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
                onClick={handleCardNextClick}
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
            <ButtonBase onClick={showAnswer}>
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
                {/* MAIN TEXT */}
                <Typography
                  className="raleway-600"
                  fontSize={"30px"}
                  color={"#003875"}
                  marginX={"20px"}
                >
                  {text}
                </Typography>

                {/* Card Counter */}
                <Typography
                  className="raleway-500"
                  fontSize="18px"
                  color="#003875"
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                  }}
                >
                  {`${idx + 1}/${specificCard[topic]?.length || 0}`}
                </Typography>

              </Box>
            </ButtonBase>
          </Stack>
          <Button
            className="raleway-600"
            onClick={markCardAsStudied} 
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

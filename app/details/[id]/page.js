"use client";
import { useParams } from "next/navigation";
import { Box, Typography, Stack, Button, ButtonBase } from "@mui/material";
import Sidebar from "../../components/sidebar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import withAuth from "../../../utils/withAuth";
import { useAuth } from "../../../AuthContext";
import { useState, useEffect } from "react";
import { updateCards } from "../../api/save/route.mjs";

const Details = () => {
  const { user } = useAuth();
  const params = useParams();
  const [cards, setCards] = useState({});
  const [loading, setLoading] = useState(true);
  const [specificCard, setSpecificCard] = useState({});
  const [idx, setIdx] = useState(0);

  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");

  const [boop, setBoop] = useState(false);

  const handleCardNextClick = () => {
    setBoop(false);
    const currentCard = specificCard[topic][idx];
    if (idx < specificCard[topic].length - 1) {
      setIdx(idx + 1);
      setText(currentCard["question"]);
    } else {
      setIdx(0);
      setText(specificCard[topic][0]["question"]);
    }
    console.log(idx);
  };

  const handleCardPrevClick = () => {
    setBoop(false);
    const currentCard = specificCard[topic][idx];
    if (idx > 0) {
      setIdx(idx - 1);
      setText(currentCard["question"]);
    } else {
      setIdx(specificCard[topic].length - 1);
      setText(specificCard[topic][specificCard[topic].length - 1]["question"]);
    }
    console.log(idx);
  };

  const showAnswer = () => {
    if (boop) {
      setText(specificCard[topic][idx]["question"]);
    } else {
      setText(specificCard[topic][idx]["answer"]);
    }
    setBoop(!boop);
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const userID = user.uid;
        const cardList = await updateCards(userID);

        const parsedCardList =
          typeof cardList === "string" ? JSON.parse(cardList) : cardList;

        setCards(parsedCardList);

        const specificCard = parsedCardList.find(
          (category) => category.name === params.id.toLowerCase()
        );

        const topic = params.id.toLowerCase(); // Use this local variable
        setTopic(topic);

        setSpecificCard(specificCard);

        setText(specificCard[topic][0]["question"]);
        // console.log("Topic:", topic);
        // console.log("Specific Card:", specificCard["animal"][0]["question"]); // Print the specific card
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

import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { firestore } from "../../firebase"; // Import Firebase configuration
import { collection, query, where, getDocs } from "firebase/firestore";

export default function CardsStats({ userId }) {
  const [flashcardsCreated, setFlashcardsCreated] = useState(0);
  const [studiedCards, setStudiedCards] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the 'card' subcollection of the specific user
        const cardsRef = collection(firestore, "cards", userId, "card");

        // Query to get the total number of cards in the 'card' subcollection for the specific user
        const totalCardsQuery = query(cardsRef);
        const totalCardsSnapshot = await getDocs(totalCardsQuery);
        const totalFlashcards = totalCardsSnapshot.size; // Count the number of cards for this user

        // Query to get the number of studied cards (where 'studied' is true)
        
        const studiedCardsQuery = query(cardsRef, where("studied", "==", true));
        const studiedCardsSnapshot = await getDocs(studiedCardsQuery);
        const totalStudiedCards = studiedCardsSnapshot.size; // Count the studied cards for this user

        // Update state with the counts
        setFlashcardsCreated(totalFlashcards);
        setStudiedCards(totalStudiedCards);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <>
      {/* First Box */}
      <Box
        sx={{
          color: "white",
          backgroundColor: "#6E62E5",
          minHeight: "20vh",
          width: "73vw",
          borderRadius: "25px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            marginLeft: "5%",
          }}
        >
          <Typography className="raleway-600" fontSize={"20px"}>
            Wizzy
          </Typography>
          <Typography
            className="raleway-600"
            fontSize={"36px"}
            marginTop={"15px"}
            lineHeight={"45px"}
            marginRight={"25%"}
          >
            AI-powered flashcards to help you master any subject, anytime,
            anywhere.
          </Typography>
        </Stack>
      </Box>

      {/* 3 Boxes */}
      <Stack direction={"row"} spacing={3} marginTop={"2%"}>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#EFE4A9",
            minHeight: "32vh",
            width: "23.4vw",
            borderRadius: "25px",
          }}
        >
          <Stack marginTop={"2%"} marginLeft={"12%"}>
            <Typography
              className="raleway-700"
              fontSize={"78px"}
              color={"#000000"}
            >
              {flashcardsCreated}
            </Typography>
            <Typography
              className="raleway-500"
              fontSize={"24px"}
              color={"#000000"}
            >
              created cards
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#C4DEB5",
            minHeight: "32vh",
            width: "23.4vw",
            borderRadius: "25px",
          }}
        >
          <Stack marginTop={"2%"} marginLeft={"12%"}>
            <Typography
              className="raleway-700"
              fontSize={"78px"}
              color={"#000000"}
            >
              {studiedCards}
            </Typography>
            <Typography
              className="raleway-500"
              fontSize={"24px"}
              color={"#000000"}
            >
              studied cards
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#F4C6F5",
            minHeight: "32vh",
            width: "23.4vw",
            borderRadius: "25px",
          }}
        >
          <Stack marginTop={"2%"} marginLeft={"12%"}>
            <Typography
              className="raleway-700"
              fontSize={"78px"}
              color={"#000000"}
            >
              0
            </Typography>
            <Typography
              className="raleway-500"
              fontSize={"24px"}
              color={"#000000"}
            >
              days study streak
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Sidebar from "../components/sidebar";
import Cards from "../components/cards";
import AccountHolder from "../components/account_holder";
import CardsStats from "../components/cards_stats";
import withAuth from "../../utils/withAuth";
import { useAuth } from "../../AuthContext";
import { updateCards } from "../api/save/route.mjs";

const Dashboard = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); // State for filtered cards
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const userID = user.uid;
        const cardList = await updateCards(userID);

        setCards(cardList);
        setFilteredCards(cardList.filter((card) => card.studied === false)); // Filter cards where studied is false
        console.log("Filtered Card List:", JSON.stringify(cardList, null, 2));
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [user.uid]);

  return (
    <>
      {user ? (
        <Box
          sx={{
            backgroundColor: "#EEF4FE",
            minHeight: "100vh",
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
                minHeight: "100vh", // Ensures it covers full viewport height
                width: "77vw",
                backgroundColor: "#EEF4FE",
                paddingLeft: "2%",
                paddingBottom: "2rem", // Adds padding at the bottom
              }}
            >
              <Stack>
                {/* Account Header */}
                <AccountHolder username={user.email} />

                {/* Cards Stats */}
                <CardsStats userId={user.uid} />

                {/* Cards */}
                <Stack
                  marginTop={"3%"}
                  direction={"row"}
                  sx={{ display: "flex" }}
                >
                  <Typography
                    className="raleway-700"
                    fontSize={"24px"}
                    color={"#003875"}
                  >
                    {loading ? "No Cards Available" : "Continue Learning"}
                  </Typography>
                </Stack>

                {/* Card Display */}
                <Box
                  sx={{
                    marginTop: "2%",
                    overflowX: "auto", // Enable horizontal scrolling
                    overflowY: "hidden", // Prevent vertical scroll
                    display: "flex",
                    width: "100%",
                    paddingBottom: "1rem", // Space below the scrollable container
                    scrollbarWidth: "thin", // Narrow scrollbar for non-WebKit browsers
                    "&::-webkit-scrollbar": {
                      height: "8px", // Horizontal scrollbar height
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#c1c1c1", // Scrollbar thumb color
                      borderRadius: "4px", // Rounded edges for thumb
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "#f5f5f5", // Track background color
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "inline-flex", // Prevent stacking of items
                      flexWrap: "nowrap", // Ensure items remain in a single row
                    }}
                  >
                    {loading ? (
                      <Typography>Loading...</Typography>
                    ) : (
                      filteredCards.map((card) => (
                        <Cards
                          key={card.name} // Ensure each card has a unique key
                          title={`${
                            card.name.charAt(0).toUpperCase() +
                            card.name.slice(1)
                          }`}
                        />
                      ))
                    )}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Box>loading</Box>
      )}
    </>
  );
};

export default withAuth(Dashboard);

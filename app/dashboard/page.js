"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Sidebar from "../components/sidebar";
import Cards from "../components/cards";
import AccountHolder from "../components/account_holder";
import CardsStats from "../components/cards_stats";
import { useRouter } from "next/navigation";
import withAuth from "../../utils/withAuth";
import { useAuth } from "../../AuthContext";
import { updateCards } from "../api/save/route.mjs";

const Dashboard = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const userID = user.uid;
        const cardList = await updateCards(userID);
        setCards(cardList);
        console.log("Card List:", JSON.stringify(cardList, null, 2));
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
      {user ? (
        <Box
          sx={{
            backgroundColor: "#EEF4FE",
            minHeight: "100vh",
            width: "100vw",
            overflow: "hidden",
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
                paddingLeft: "2%",
              }}
            >
              <Stack>
                {/* Account Header */}

                <AccountHolder username={user.email} />

                {/* Cards Stats */}

                <CardsStats />

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
                    Continue Learning
                  </Typography>
                </Stack>
                {/* Card Display */}
                <Box
                  sx={{
                    marginTop: "2%",
                    overflowX: "auto",
                    width: "100%",
                    display: "flex",
                    paddingRight: "5%",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "inline-flex",
                      minWidth: "max-content",
                    }}
                  >
                    {/* MAIN CARD */}
                    {/* <Cards title="Chello" />
                    <Cards title="Chello" />
                    <Cards title="Chello" />
                    <Cards title="Chello" />
                    <Cards title="Chello" /> */}

                    {/* Cards */}
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      cards.map((card) => (
                        <Cards
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

import { firestore } from "./firebase.mjs";
import { collection, getDocs } from "firebase/firestore";

export const updateCards = async (userID) => {
  try {
    const cardsCollectionRef = collection(firestore, "cards", userID, "card");

    const snapshot = await getDocs(cardsCollectionRef);
    const cardList = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      const parsedData = Object.keys(data).reduce((acc, key) => {
        try {
          acc[key] = JSON.parse(data[key]);
        } catch (error) {
          acc[key] = data[key];
        }
        return acc;
      }, {});

      cardList.push({
        name: doc.id,
        ...parsedData,
      });
    });

    console.log("Card List:", JSON.stringify(cardList, null, 2));

    return cardList;
  } catch (error) {
    console.error("Error updating inventory:", error);
    return [];
  }
};

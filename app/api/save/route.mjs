import { firestore } from "./firebase.mjs";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

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

    // console.log("Card List:", JSON.stringify(cardList, null, 2));

    return cardList;
  } catch (error) {
    console.error("Error updating inventory:", error);
    return [];
  }
};

export const saveQuestions = async (userID, cardName, question) => {
  const cardsCollectionRef = collection(firestore, "cards", userID, "card");
  const sample = JSON.parse(question);
  const questionData = JSON.stringify(sample["questions"]);
  const cardDocRef = doc(cardsCollectionRef, cardName.toLowerCase());

  await setDoc(cardDocRef, { [cardName.toLowerCase()]: questionData });

  // console.log(
  //   `Questions saved to the user's card subcollection with field name ${cardName} successfully!`
  // );
};

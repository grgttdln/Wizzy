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

    console.log("Card List:", JSON.stringify(cardList, null, 2));

    return cardList;
  } catch (error) {
    console.error("Error updating inventory:", error);
    return [];
  }
};

export const saveQuestions = async (userID, cardName, question) => {
  const cardsCollectionRef = collection(firestore, "cards", userID, "card");

  // Reference to a specific document within the subcollection
  const cardDocRef = doc(cardsCollectionRef, cardName);

  // const questions = `[
  //   {
  //     question: "What is the primary structure of a glass?",
  //     answer:
  //       "A mixture of sand or silicon dioxide and soda or sodium oxide, also known as silica and sodium",
  //   },
  //   {
  //     question:
  //       "What is the main difference between soda-lime glass and borosilicate glass?",
  //     answer:
  //       "Soda-lime glass contains sodium oxide, while borosilicate glass contains boron trioxide and has a lower thermal expansion coefficient",
  //   },
  //   {
  //     question: "What is the purpose of the melting point of glass?",
  //     answer:
  //       "To determine the temperature at which glass can be safely melted and formed",
  //   },
  //   {
  //     question: "What can happen to glass when it is rapidly cooled?",
  //     answer:
  //       "It can become brittle and prone to breakage due to the formation of stresses and stresses",
  //   },
  //   {
  //     question: "What is annealing?",
  //     answer:
  //       "A process of slowly cooling glass to relieve stresses and make it less prone to breakage",
  //   },
  //   {
  //     question: "What is the chemical property of glass?",
  //     answer: "It is amorphous, meaning it lacks a regular crystal structure",
  //   },
  //   {
  //     question: "What are the main components of glass?",
  //     answer:
  //       "Silicon dioxide, sodium oxide, and aluminum oxide, along with other minor components",
  //   },
  //   {
  //     question: "What is the purpose of coloration in glass?",
  //     answer:
  //       "To create a variety of colors and effects, such as absorption, reflection, or scattering",
  //   },
  //   {
  //     question: "What are some common uses of glass?",
  //     answer:
  //       "In windows, containers, automotive components, optical instruments, and electronics",
  //   },
  //   {
  //     question: "What is tempered glass?",
  //     answer:
  //       "A type of safety glass that is processed to increase its strength and durability",
  //   },
  // ]`;

  // Save the entire array as a single document
  await setDoc(cardDocRef, { question });
  console.log("Questions saved to the user's card subcollection successfully!");
};

// saveQuestions("eyYZnM0P1igQyF4BshklB7n29A73", "glass");

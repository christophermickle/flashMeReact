import { useState, useEffect } from "react";


const useLocalDeck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const localDeck = localStorage.getItem("localDeck");
    if (localDeck) {
      try {
        const parsedDeck = JSON.parse(localDeck);
        setDeck(parsedDeck);
      } catch (error) {
        console.error("Failed to parse localDeck:", error);
        localStorage.removeItem("localDeck"); // remove the invalid item from storage
      }
    } else {
      localStorage.setItem("localDeck", JSON.stringify(deck));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localDeck", JSON.stringify(deck));
  }, [deck]);

  return [deck, setDeck];
};

export default useLocalDeck;

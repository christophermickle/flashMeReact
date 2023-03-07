import { useState, useEffect } from "react";

const useLocalDeck = (initialDeck) => {
  const [deck, setDeck] = useState(initialDeck);

  useEffect(() => {
    const localDeck = localStorage.getItem("localDeck");
    if (localDeck) {
      try {
        setDeck(JSON.parse(localDeck));
      } catch (error) {
        console.error("Failed to parse localDeck:", error);
        localStorage.removeItem("localDeck"); // remove the invalid item from storage
      }
    } else {
      localStorage.setItem("localDeck", JSON.stringify(deck));
    }
  }, [deck]);

  useEffect(() => {
    localStorage.setItem("localDeck", JSON.stringify(deck));
  }, [deck]);

  return [deck, setDeck];
};

export default useLocalDeck;

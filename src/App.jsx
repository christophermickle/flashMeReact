// Hooks
import React from "react";
import { useState, useRef, useEffect } from "react";
import useLocalDeck from "./customHooks/useLocalDeck";
// Libraries
import { v4 as uuidv4 } from "uuid";
// Styles
import "./index.css";

function App() {
  const [deck, setDeck] = useLocalDeck([]);
  const [currentCard, setCurrentCard] = useState(null);
  const modalRef = useRef();
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [frontDisplay, setFrontDisplay] = useState("Front of card");
  const [backDisplay, setBackDisplay] = useState("Back of card");

  useEffect(() => {
    const localDeck = JSON.parse(localStorage.getItem("deck"));
    if (localDeck && localDeck.length > 0) {
      setDeck(localDeck);
      setCurrentCard(localDeck[0]);
    } else {
      setDeck([]);
      setCurrentCard(null);
      localStorage.setItem("deck", JSON.stringify([]));
    }
  }, [setDeck]);

  function cardSide() {
    if (Math.random() < 0.5) {
      return "front";
    } else {
      return "back";
    }
  }

  const addCard = (e) => {
    e.preventDefault();
    const newCard = {
      id: uuidv4(),
      front: cardFront,
      back: cardBack,
    };
    setDeck([...deck, newCard]);
    localStorage.setItem("deck", JSON.stringify([...deck, newCard]));
    setCardFront("");
    setCardBack("");
  };

  const nextCard = () => {
    if (deck.length === 0) {
      alert("No cards in deck!");
      return;
    }

    const hiddenSide = cardSide();
    const randomIndex = Math.floor(Math.random() * deck.length);

    try {
      setCurrentCard(deck[randomIndex]);

      if (hiddenSide === "back") {
        setFrontDisplay(deck[randomIndex].front);
        setBackDisplay("???");
      } else {
        setFrontDisplay("???");
        setBackDisplay(deck[randomIndex].back);
      }
    } catch (error) {
      alert("No cards in deck!");
    }
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addCard(e);
    }
  };

  const showAnswer = () => {
    if (deck.length === 0) {
      alert("No cards in deck!");
    } else if (currentCard) {
      setFrontDisplay(currentCard.front);
      setBackDisplay(currentCard.back);
    }
  };

  const showModalHandler = () => {
    modalRef.current.showModal();
  };

  const closeModalHandler = (e) => {
    e.preventDefault();
    modalRef.current.close();
  };
  //  onKeyDown handler, right arrow key = next card, spacebar = show answer using switch statement and making sure the modal isn't open and the deck isn't empty and a button isn't selected (focus)

  const keyDownHandler = (e) => {
    if (modalRef.current.open) {
      return;
    }
    if (deck.length === 0) {
      return;
    }
    if (e.target.tag === "BUTTON") {
      return;
    }
    switch (e.key) {
      case "ArrowRight":
        nextCard();
        break;
      case " ":
        showAnswer();
        break;
      default:
        break;
    }
  };
  return (
    <div className="app" onKeyDown={keyDownHandler}>
      <div className="wrapper">
        <h1 className="title">My Deck...</h1>
        <main className="deckContainer">
          <div className="card">
            <p id="frontDisplay">{frontDisplay}</p>
            <div className="borderBreak"></div>
            <p id="backDisplay">{backDisplay}</p>
          </div>
          <div className="buttons">
            <button type="button" id="showAnswer" onClick={showAnswer}>
              Show Answer
            </button>
            <button type="button" id="showModal" onClick={showModalHandler}>
              Add Card
            </button>
            <button type="button" id="nextCard" onClick={nextCard}>
              {" "}
              Next Card
            </button>
          </div>
        </main>

        <dialog ref={modalRef} onKeyDown={enterHandler} id="newCardModal">
          <form className="newCardWrapper">
            <button id="closeModal" onClick={closeModalHandler}>
              X
            </button>
            <input class="bg-slate-200"
              id="cardFrontText"
              name="cardFront"
              type="text"
              placeholder="Front of card"
              value={cardFront}
              onChange={(e) => {
                setCardFront(e.target.value);
              }}
            />
            <input
              id="cardBackText"
              name="cardBack"
              type="text"
              placeholder="Back of card"
              value={cardBack}
              onChange={(e) => {
                setCardBack(e.target.value);
              }}
            />
            <button onClick={addCard} id="saveButton">
              Save card
            </button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default App;

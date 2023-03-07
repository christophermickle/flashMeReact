// Hooks
import { useState, useRef, useEffect } from "react";
import useLocalDeck from "./customHooks/useLocalDeck";
// Libraries
import { v4 as uuidv4 } from "uuid";
// Styles
import "./index.css";

localStorage.setItem("localDeck", JSON.stringify([]));

function App() {
  const [deck, setDeck] = useState(useLocalDeck([]));
  const [currentCard, setCurrentCard] = useState(deck[0]);
  const showModalHandler = () => {
    modalRef.current.showModal();
  };
  const closeModalHandler = (e) => {
    e.preventDefault();
    modalRef.current.close()
    ;
  };
  const modalRef = useRef();
  const addCard = (e) => 
  { e.preventDefault();
    const newCard = {
      id: uuidv4(),
      front: cardFront,
      back: cardBack,
    };
    setDeck([...deck, newCard]);
    setCardFront("");
    setCardBack("");
  };
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [frontDisplay, setFrontDisplay] = useState("Front of card");
  const [backDisplay, setBackDisplay] = useState("Back of card");


  function cardSide() {
  if (Math.random() <0.5) {
      return 'front' } 
      else { return 'back' } 
}
  const nextCard = () => {
    const hiddenSide = cardSide();
    const randomIndex = Math.floor(Math.random() * deck.length);
    setCurrentCard(deck[randomIndex]);
    if (hiddenSide === 'front') {
      setFrontDisplay(deck[randomIndex].front);
      setBackDisplay("???");
    } else {
      setFrontDisplay("???");
      setBackDisplay(deck[randomIndex].back);
    }
  };

  

  const showAnswer = () => {
    if (deck.length === 0) {alert('No cards in deck!')}
    else {
    setFrontDisplay(currentCard.front);
    setBackDisplay(currentCard.back)}
    nextCard();
  };
  return (
    <div className='app'>
      <div className='wrapper'>
        <h1 className='title'>
          {" "}
          My Deck...
        </h1>
        <main className='deckContainer'>
          <div className='card'>
            <p id='frontDisplay'>{frontDisplay}</p>
            <div className='borderBreak'></div>
            <p id='backDisplay'>{backDisplay}</p>
          </div>
          <div className='buttons'>
            <button type="button" id='showAnswer'onClick={showAnswer} ></button>
            <button type="button" id='showModal' onClick={showModalHandler}>
              +
            </button>
            <button type="button" id='nextCard' onClick={nextCard}></button>
          </div>
        </main>

        <dialog ref={modalRef} id='newCardModal'>
          <form className='newCardWrapper'>
            <button id='closeModal' onClick={closeModalHandler}>
              X
            </button>
            <input
              id='cardFrontText'
              name='cardFront'
              type='text'
              placeholder='Front of card'
              value={cardFront}
              onChange={(e) => {
                setCardFront(e.target.value);
              }}
            />
            <input
              id='cardBackText'
              name='cardBack'
              type='text'
              placeholder='Back of card'
              value={cardBack}
              onChange={(e) => {
                setCardBack(e.target.value);
              }}
            />
            <button onClick={addCard} id='saveButton'>
              Save card
            </button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default App;

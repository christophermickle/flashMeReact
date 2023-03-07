import { useState, useRef } from "react";
import "./index.css";

function App() {
  const [deck, setDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const showModalHandler = () => {modalRef.current.showModal()};
  const closeModalHandler = () => {modalRef.current.close()};
  const modalRef = useRef();

  return (
    <div className="app">
      <h1 className='title' contenteditable='true'>
        {" "}
        My Deck...
      </h1>
      <main className='deckContainer'>
        <div className='card'>
          <p id='frontDisplay'></p>
          <div className='borderBreak'></div>
          <p id='backDisplay'></p>
        </div>
        <div className='buttons'>
          <button id='showAnswer'></button>
          <button id='showModal' onClick={showModalHandler}>+</button>
          <button id='nextCard'></button>
        </div>
      </main>

      <dialog ref={modalRef} id='newCardModal'>

        <div className='newCardWrapper'>
          <button id='closeModal' onClick={closeModalHandler}>X</button>
          <input
            id='cardFrontText'
            name='cardFront'
            type='text'
            placeholder='Front of card'
          />
          <input
            id='cardBackText'
            name='cardBack'
            type='text'
            placeholder='Back of card'
          />
          <button id='saveButton'>Save card</button>
        </div>
      </dialog>
    </div>
  );
}

export default App;

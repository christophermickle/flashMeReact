import React from "react";

const Buttons = ({ showAnswer, showModalHandler, nextCard }) => {
  return (
    <div className='mt-10 flex justify-between items-center space-x-4'>
      <button
        type='button'
        className='bg-white text-black py-2 px-4 rounded-full shadow-lg backdrop-blur-md backdrop-opacity-50 focus:outline-none hover:bg-opacity-80'
        onClick={showAnswer}
      >
        Show Answer
      </button>
      <button
        type='button'
        className='bg-white text-black py-2 px-4 rounded-full shadow-lg backdrop-blur-md backdrop-opacity-50 focus:outline-none hover:bg-opacity-80'
        onClick={nextCard}
      >
        Next Card
      </button>
      <button
        type='button'
        className='bg-white text-black py-2 px-4 rounded-full shadow-lg backdrop-blur-md backdrop-opacity-50 focus:outline-none hover:bg-opacity-80'
        onClick={showModalHandler}
      >
        Add Card
      </button>
    </div>
  );
};

export default Buttons;

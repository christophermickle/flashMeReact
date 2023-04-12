import React from "react";

const NewCardModal = ({
  modalRef,
  enterHandler,
  closeModalHandler,
  cardFront,
  setCardFront,
  cardBack,
  setCardBack,
  addCard,
}) => {
  return (
    <dialog className='hidden' ref={modalRef}>
      <div className='bg-white p-8 rounded-lg shadow-md w-full h-full max-w-2xl'>
        <h2 className='text-2xl font-bold mb-8'>Add a New Card</h2>
        <div className='grid grid-cols-2 gap-8'>
          <div className='col-span-1 flex flex-col items-center'>
            <label htmlFor='cardFrontText' className='mb-4'>
              Front
            </label>
            <textarea
              id='cardFrontText'
              className='w-full h-24 p-2 border-none rounded-lg shadow-md focus:ring-0 bg-slate-800'
              value={cardFront}
              onChange={(e) => setCardFront(e.target.value)}
            />
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <label htmlFor='cardBackText' className='mb-4'>
              Back
            </label>
            <textarea
              id='cardBackText'
              className='w-full h-24 p-2 border-none rounded-lg shadow-md focus:ring-0'
              value={cardBack}
              onChange={(e) => setCardBack(e.target.value)}
            />
          </div>
        </div>
        <div className='mt-8 flex justify-end space-x-4'>
          <button
            type='button'
            className='bg-red-500 text-white py-2 px-4 rounded-full shadow-lg backdrop-blur-md backdrop-opacity-50 focus:outline-none hover:bg-opacity-80'
            onClick={closeModalHandler}
          >
            Close
          </button>
          <button
            type='button'
            className='bg-green-500 text-white py-2 px-4 rounded-full shadow-lg backdrop-blur-md backdrop-opacity-50 focus:outline-none hover:bg-opacity-80'
            onClick={addCard}
          >
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
};
export default NewCardModal;
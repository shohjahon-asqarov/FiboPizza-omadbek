import React, { useEffect, useRef } from 'react';
const ModalBeverages = ({ detailed, setOpen, addCart }) => {
  const modalRef = useRef(null);
  const closeModal = () => {
    setOpen(false);
  };

  const handleEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleWindowClick = (event) => {
    // Check if the click occurred outside the modal content
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Add event listeners
    document.addEventListener('keydown', handleEscapeKeyPress);
    window.addEventListener('click', handleWindowClick);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);
 
  return (
    <div className="w-screen h-screen top-0 left-0 fixed bg-black/70 backdrop-blur flex justify-center items-center">
      <div data-aos="zoom-in-up" className="w-full max-w-[668px] bg-white py-10 pl-10 pr-8 rounded-lg relative">
        <div className="justify-between items-center sm:flex">
          <img width={200} src={detailed.img} alt={detailed.title} className='mr-5' />
          <div className="">
            <h3 className='font-bold text-3xl leading-7 text-pizza mb-4'>{detailed.title}</h3>
            <p className='font-medium text-base text-text-pizza mb-4'>{detailed.text}</p>
            <span className='font-bold text-[22px] leading-5 text-all-color mr-5'>{detailed.narx} ₽</span>
          </div>
        </div>
        <div className="flex justify-end space-x-5">
          <button onClick={() => setOpen(false)} className='py-2 px-7 bg-border rounded-lg bottom-5'>Close</button>
          <button onClick={() => addCart(detailed)} className='py-2 px-7 bg-yellow rounded-lg right-5 bottom-5'>Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export default ModalBeverages;

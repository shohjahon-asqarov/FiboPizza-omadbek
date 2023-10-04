import React, { useState } from 'react';
import soups from '../../public/assets/img/supi/soups';
import ModalSoups from '../modal/ModalSoups';

const Soups = ({addCart}) => {
    const [detailed, setDetailed] = useState({})
    const [open, setOpen] = useState(false)

    const openModal = (soups) => {
        setDetailed(soups)
        setOpen(true)
    }
  return (
    <section className='py-10'>
           <div className="w-full max-w-[1240px] px-5 mx-auto">
           <h2 className='font-bold py-10 text-[32px] text-yellow leading-10'>Soups</h2>
                <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                    {
                        soups.map((soups) => {
                            return (
                                <li data-aos="fade-up" className='p-5 border border-border rounded-lg hover:shadow-shadow flex flex-col items-center justify-center'>
                                    <button onClick={() => openModal(soups)}>
                                        <img src={soups.img} alt={soups.title} />
                                    </button>
                                    <h3 className='font-bold text-2xl leading-7 text-pizza mb-4'>{soups.title}</h3>
                                    <p className='font-medium text-sm text-text-pizza mb-4'>{soups.text}</p>
                                    <div className="w-full flex items-center justify-between">
                                        <span className='font-bold text-[22px] leading-5 text-all-color mr-5'>{soups.narx}₽</span>
                                        <button onClick={() => addCart(soups)} className='w-32 py-1 right-full bg-yellow text-center rounded-lg font-bold text-sm leading-7 text-white'>{soups.btn}</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {
                open &&
                <ModalSoups addCart={addCart} detailed={detailed} open={open} setOpen={setOpen} />
            }
    </section>
  );
}

export default Soups;

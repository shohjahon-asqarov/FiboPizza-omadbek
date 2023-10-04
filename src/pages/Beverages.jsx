import React, { useState } from 'react';
import water from '../../public/assets/img/water/water';
import ModalBeverages from '../modal/ModalBeverages';

const Beverages = ({addCart}) => {
    const [detailed, setDetailed] = useState({})
    const [open, setOpen] = useState(false)

    const openModal = (water) => {
        setDetailed(water)
        setOpen(true)
    }
  return (
            <section className='py-10'>
                <div className="w-full max-w-[1240px] px-5 mx-auto">
                    <h2 className='font-bold py-10 text-[32px] text-yellow leading-10'>Beverages</h2>
                    <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                        {
                            water.map((water1) => {
                                return (
                                    <li data-aos="fade-up" className='p-5 border border-border rounded-lg hover:shadow-shadow flex flex-col items-center justify-center'>
                                        <button onClick={() => openModal(water1)}>
                                            <img src={water1.img} alt={water1.title} />
                                        </button>
                                        <h3 className='font-bold text-2xl leading-7 text-pizza mb-4'>{water1.title}</h3>
                                        <p className='font-medium text-sm text-text-pizza mb-4'>{water1.text}</p>
                                        <div className="w-full flex items-center justify-between">
                                            <span className='font-bold text-[22px] leading-5 text-all-color mr-5'>{water1.narx} ₽</span>
                                            <button onClick={() => addCart(water1)} className='w-32 py-1 right-full bg-yellow text-center rounded-lg font-bold text-sm leading-7 text-white'>{water1.btn}</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    open &&
                    <ModalBeverages addCart={addCart} detailed={detailed} open={open} setOpen={setOpen} />
                }
            </section>
  );
}

export default Beverages;
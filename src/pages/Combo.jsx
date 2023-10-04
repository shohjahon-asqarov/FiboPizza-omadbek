import React, { useState } from 'react';
import pitsa from '../../public/assets/pizza1/data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../modal/Modal';
import 'bootstrap-icons/font/bootstrap-icons.css'
const  Combo = ({addCart}) => {
  const [detailed, setDetailed] = useState({})
  const [open, setOpen] = useState(false)

    const openModal = (piza)=>{
      setDetailed(piza)
      setOpen(true)
    }

  return (
    <section className='py-10'>
      <div className="w-full max-w-[1240px] px-5 mx-auto">
        <h2 className='font-bold py-10 text-[32px] text-yellow leading-10'>Combo</h2>
        <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
          {
            pitsa.map((piza) => {
              return (
                <li data-aos="fade-up" className='p-5 border border-border rounded-lg hover:shadow-shadow flex flex-col items-center justify-center'>
                  <button onClick={() => openModal(piza) }>
                    <img src={piza.img} alt={piza.title} />
                  </button>
                  <h3 className='font-bold text-2xl leading-7 text-pizza mb-4'>{piza.title}</h3>
                  <p className='font-medium text-sm text-text-pizza mb-4'>{piza.text}</p>
                  <div className="w-full flex items-center justify-between">
                    <span className='font-bold text-[22px] leading-5 text-all-color mr-5'>{piza.narx}₽</span>
                    <button onClick={() => addCart(paste)} className='w-32 py-1 right-full bg-yellow text-center rounded-lg font-bold text-sm leading-7 text-white'>{piza.btn}</button>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </div>
      
      <ToastContainer />
   {
    open && 
    <Modal addCart={addCart} detailed={detailed} open={open} setOpen={setOpen}/>
   }

    </section>
  );
}

export default Combo;
// '../../public/assets/data'
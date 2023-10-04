import React, { useState } from 'react';
import stock from '../../public/assets/stock/stock';
import { Link } from 'react-router-dom';

const Stock = () => {
  return (
    <section className='py-10'>
        <div className="w-full max-w-[1240px] px-5 mx-auto">
        <h2 className='font-bold py-10 text-[32px] text-yellow leading-10'>Stock</h2>

            <ul className='grid  gap-7 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 '>
                {
                    stock.map((stocks)=>{
                        return(
                            <li className='rounded-lg border border-border'>
                                <img className='w-full' src={stocks.img} alt={stocks.title} />
                                <div className="p-5">
                                <h3 className='font-bold text-2xl leading-7 text-pizza mb-4'>{stocks.title}</h3>
                                <p className='font-medium text-sm text-text-pizza mb-4'>{stocks.text}</p>
                                <Link to={`/stock/${stocks.id}`} className='inline-block w-32 py-1 bg-yellow text-center rounded-lg font-bold text-sm leading-7 text-white'>{stocks.btn}</Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  );
}

export default Stock;

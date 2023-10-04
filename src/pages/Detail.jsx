import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import stock from '../../public/assets/stock/stock';
const Detail = () => {
  const { id } = useParams()
  const product = stock.find(i => i.id === Number(id))
  console.log(product);
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <setcion>
      <div className="w-full max-w-[1240px] px-5 mx-auto py-10">
        <div className="w-full grid  gap-5 grid-cols-1 md:grid-cols-2">
            <div className="">
              <h2 className='text-3xl font-bold mb-5'>{product.title}</h2>
              <p className='font-semibold mb-10'>{product.text}</p>
              <Link to='/stock' className='py-3 px-5 bg-cyan-800 font-bold text-white rounded-md'>Back</Link>
            </div>
          <img className=' h-[300px] border rounded' src={product.img} alt={product.title} />
        </div>
      </div>
    </setcion>
  );
}

export default Detail;
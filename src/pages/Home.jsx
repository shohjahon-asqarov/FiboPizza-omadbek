import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import next from '../../public/assets/icons/next.svg';
import prev from '../../public/assets/icons/prev.svg';
const Home = () => {
  const [custom_swiper, set_swiper] = useState({});
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };
  return (
    <section data-aos="fade-up" className='pb-14'>
      <div className="w-full max-w-[1240px] px-5 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          onInit={(ev) => {
            set_swiper(ev);
        }}

          loop={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper pb-10"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            868: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide><img src="../assets/img/slide1.jpg" alt="slide" /></SwiperSlide>
          <SwiperSlide><img src="../assets/img/slide2.jpg" alt="slide" /></SwiperSlide>
          <SwiperSlide><img src="../assets/img/slide1.jpg" alt="slide" /></SwiperSlide>
          <SwiperSlide><img src="../assets/img/slide2.jpg" alt="slide" /></SwiperSlide>
          <div className="absolute w-full flex justify-between items-center left-0 top-0 bottom-10 right-0">
            <button className="z-10" onClick={prevSlide}><img src={next} alt="control icon" /></button>
            <button className="z-10" onClick={nextSlide}><img src={prev} alt="control icon" /></button>
          </div>
        </Swiper>
        <h3 className='font-bold text-2xl leading-7 text-all-color mb-8'>News</h3>
        <div className="grid  gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {/* 1 */}
          <button className="shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out">
            <img src="../assets/news/news-pizza.svg" alt="news-pizza" className='mr-6' />
            <div className="flex flex-col items-start">
              <h3 className='font-bold text-lg leading-5'>Karbonara</h3>
              <span className='font-extrabold text-base leading-5 text-yellow'>от 120 ₽</span>
            </div>
          </button>
          {/* 2 */}
          <button className="shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out">
            <img src="../assets/news/news-pizza.svg" alt="news-pizza" className='mr-6' />
            <div className="flex flex-col items-start">
              <h3 className='font-bold text-lg leading-5'>Karbonara</h3>
              <span className='font-extrabold text-base leading-5 text-yellow'>от 120 ₽</span>
            </div>
          </button>
          {/* 3 */}
          <button className="shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out">
            <img src="../assets/news/news-pizza.svg" alt="news-pizza" className='mr-6' />
            <div className="flex flex-col items-start">
              <h3 className='font-bold text-lg leading-5'>Karbonara</h3>
              <span className='font-extrabold text-base leading-5 text-yellow'>от 120 ₽</span>
            </div>
          </button>
          {/* 4 */}
          <button className="shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out">
            <img src="../assets/news/news-pizza.svg" alt="news-pizza" className='mr-6' />
            <div className="flex flex-col items-start">
              <h3 className='font-bold text-lg leading-5'>Karbonara</h3>
              <span className='font-extrabold text-base leading-5 text-yellow'>от 120 ₽</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;

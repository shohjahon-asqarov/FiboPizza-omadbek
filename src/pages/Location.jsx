import React from 'react';

const Location = () => {
    return (
        <section  className='py-14 mt-10 bg-border'>
            <div className="w-full max-w-[1240px] px-5 mx-auto">
                <h2 className='font-bold text-3xl text-center text-yellow mb-14'>Payment and delivery</h2>
                <div data-aos="fade-up" className="grid gap-12 mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
                    {/* 1 */}
                    <div className="px-3 pt-10 pb-7  bg-white shadow-shadow rounded-xl flex flex-col items-center justify-center hover:-translate-y-5 transition duration-500 ease-in-out cursor-pointer relative">
                        <p className='font-bold text-sm text-center text-card-text'>Place the tray into the base skillet <br /> and secure int with the heat <br /> Reflective Lid.</p>
                        <div className="rounded-full absolute top-[-40px] p-5 bg-white">
                            <img src="../../public/assets/img/d1.svg" alt="savat" />
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="px-3 pt-10 pb-7  bg-white shadow-shadow rounded-xl flex flex-col items-center justify-center hover:-translate-y-5 transition duration-500 ease-in-out cursor-pointer relative">
                        <p className='font-bold text-sm text-center text-card-text'>Place the tray into the base skillet <br /> and secure int with the heat <br /> Reflective Lid.</p>
                        <div className="rounded-full absolute top-[-40px] p-5 bg-white">
                            <img src="../../public/assets/img/d2.svg" alt="savat" />
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="px-3 pt-10 pb-7  bg-white shadow-shadow rounded-xl flex flex-col items-center justify-center hover:-translate-y-5 transition duration-500 ease-in-out cursor-pointer relative">
                        <p className='font-bold text-sm text-center text-card-text'>Place the tray into the base skillet <br /> and secure int with the heat <br /> Reflective Lid.</p>
                        <div className="rounded-full absolute top-[-40px] p-5 bg-white">
                            <img src="../../public/assets/img/d3.svg" alt="savat" />
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="px-3 pt-10 pb-7  bg-white shadow-shadow rounded-xl flex flex-col items-center justify-center hover:-translate-y-5 transition duration-500 ease-in-out cursor-pointer relative">
                        <p className='font-bold text-sm text-center text-card-text'>Place the tray into the base skillet <br /> and secure int with the heat <br /> Reflective Lid.</p>
                        <div className="rounded-full absolute top-[-40px] p-5 bg-white">
                            <img src="../../public/assets/img/d4.svg" alt="savat" />
                        </div>
                    </div>
                </div>
                <div>
                    <iframe title="location" className='w-full h-72 rounded-lg'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.588803794508!2d37.477642515926995!3d55.661360580528985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54da002656bc7%3A0xa799933657c1d4f!2z0L_RgC4g0JLQtdGA0L3QsNC00YHQutC-0LPQviwgODbQsiwg0JzQvtGB0LrQstCwLCAxMTk0MTU!5e0!3m2!1sru!2sru!4v1645970050041!5m2!1sru!2sru">
                    </iframe>
                </div>

            </div>
        </section>
    );
}

export default Location;

import React from 'react';
import Header from './Header';

const Footer = () => {
    return (
        <footer className='py-10'>
            <div className="w-full max-w-[1240px] px-5 mx-auto">
                <div className=" justify-between lg:flex">
                    <div>
                        <a href={<Header />}>
                            <img src="../assets/header/header-logo.svg" className='mb-8' alt="header" />
                        </a>
                        <div className="flex space-x-14 mb-6">
                            <p className='font-bold text-base leading-8 text-text-color'>Calorie content and composition</p>
                            <p className='font-bold text-base leading-8 text-text-color'>Legal information</p>
                        </div>
                        <h3 className='font-bold text-base leading-8 text-text-color mb-4'>We are in social networks</h3>
                        <div className="grid grid-cols-2 mb-12">
                            <div className="flex flex-col ">
                                <a className='font-semibold text-base leading-7 text-text-color' href="https:/t.me/dasturchi_011">YouTube</a>
                                <a className='font-semibold text-base leading-7 text-text-color' href="https:/t.me/dasturchi_011">Instagram</a>
                            </div>
                            <div className="flex flex-col ">
                                <a className='font-semibold text-base leading-7 text-text-color' href="https:/t.me/dasturchi_011">Facebook</a>
                                <a className='font-semibold text-base leading-7 text-text-color' href="https:/t.me/dasturchi_011">ВКонтакте</a>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='w-full lg:w-1/2'>
                        <h3 className='font-bold text-sm leading-4'>Остались вопросы? А мы всегда на связи:</h3>
                        <div className="grid grid-cols-4 gap-4 py-10">
                            {/* 1 */}
                            <a href="https://www.whatsapp.com" target='_blank' className=' flex justify-center items-center rounded-xl  py-3 border-2 border-border '>
                                <img src="../assets/icons/f1.svg" alt="whatsap" />
                            </a>
                            {/* 2 */}
                            <a href="https://www.skype.com/" target='_blank' className='flex justify-center items-center rounded-xl  py-3 border-2 border-border '>
                                <img src="../assets/icons/f2.svg" alt="skype" />
                            </a>
                            {/* 3 */}
                            <a href="https://www.messenger.com/" target='_blank' className='flex justify-center items-center rounded-xl  py-3 border-2 border-border '>
                                <img src="../assets/icons/f3.svg" alt="messanger" />
                            </a>
                            {/* 4 */}
                            <a href="https:/t.me/dasturchi_011" target='_blank' className='flex justify-center items-center rounded-xl  py-3 border-2 border-border '>
                                <img src="../assets/icons/f4.svg" alt="whatsap" />
                            </a>
                            {/* 5 */}
                            <a href="https://www.facebook.com" target='_blank' className='flex justify-center items-center rounded-xl  py-3 border-2 border-border '>
                                <img src="../assets/icons/f5.svg" alt="facebook" />
                            </a>
                            {/* 6 */}
                            <a href="https://vk.com" target='_blank' className='flex justify-center items-center rounded-xl  py-3 border-2 border-border '>
                                <img src="../assets/icons/f6.svg" alt="whatsap" />
                            </a>
                            {/* 7 */}
                            <a href="https:/t.me/dasturchi_011" target='_blank' className='col-span-2 flex justify-center items-center rounded-xl font-bold text-sm leading-4  py-3 border-2 border-border '>Write to us</a>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <span className='font-bold text-[26px] text-yellow'>998 97 016 2929</span>
                            <a className='inline-block py-2 w-44 text-center bg-[#F3F3F7] rounded-3xl font-bold text-sm leading-7 text-[#696F7A]' href="tel:+998970162929">Заказать звонок</a>
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-sm leading-7 text-text-color mt-7'>YaBao All rights reserved. © 2021</p>

            </div>
        </footer>
    );
}

export default Footer;

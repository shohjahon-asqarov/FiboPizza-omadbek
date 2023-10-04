import { Badge, Drawer, IconButton } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { toast } from 'react-toastify'


const Header = ({ cart, setCart }) => {

    const [open, setOpen] = useState(false)
    const [resopen, setResOpen] = useState(false)
    const [pul, setPul] = useState(0)
    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.amount * item.narx
        })
        setPul(ans)
    }
    useEffect(() => {
        handlePrice();
    })

    const handleMinus = (item) => {
        const newArr = cart.map((obj => {
            if (obj.id === item.id) {
                return { ...obj, amount: obj.amount - 1 }
            }
            return obj
        }))
        setCart(newArr)
    }


    const handlePlus = (item) => {
        const newArr = cart.map((obj => {
            if (obj.id === item.id) {
                return { ...obj, amount: obj.amount + 1 }
            }
            return obj
        }))
        setCart(newArr)
    }

    const openMenu = () => {
        setResOpen(!resopen)
        console.log(open);
    }
    const deleteCard = (id) => {
        setCart(cart => cart.filter(i => i.id !== id))

        toast.success(`Product o'chirildi`, {
            position: "tottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    return (
        <header className='py-7'>
            <div className="w-full max-w-[1240px] px-5 mx-auto">
                <div className="flex justify-between items-center mb-5">
                    <a href="./index.html">
                        <img width={80} height={59.13} src="../assets/header/header-logo.svg" alt="header logo" />
                    </a>
                    <div className="hidden xl:inline-block">
                        <div className='flex items-center space-x-7'>
                            <a className='inline-block py-2 w-44 text-center bg-[#F3F3F7] rounded-3xl font-bold text-sm leading-7 text-[#696F7A]' href="tel:+998970162929">Заказать звонок</a>
                        </div>
                    </div>
                    <button className='inline-block xl:hidden ml-auto' onClick={openMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Menu / Hamburger_LG">
                                <path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                    </button>
                </div>

                <div className="flex justify-between">
                    <nav className='hidden xl:inline-block'>
                        <ul className='py-3 px-5 bg-[#F3F3F7] space-x-1 rounded-xl flex '>
                            <li className='bg-transparent'>
                                <NavLink to='/' className='py-2 px-4 font-semibold text-base text-text-color'>Home</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/pizza' className='py-2 px-4 font-semibold text-base text-text-color'>Pizza</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/paste' className='py-2 px-4 font-semibold text-base text-text-color'>Paste</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/soups' className='py-2 px-4 font-semibold text-base text-text-color'>Soups</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/salads' className='py-2 px-4 font-semibold text-base text-text-color'>Salads</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/beverages' className='py-2 px-4 font-semibold text-base text-text-color'>Beverages</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/desert' className='py-2 px-4 font-semibold text-base text-text-color'>Desert</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/antipasti' className='py-2 px-4 font-semibold text-base text-text-color'>Antipasti</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/stock' className='py-2 px-4 font-semibold text-base text-text-color'>Stock</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/combo' className='py-2 px-4 font-semibold text-base text-text-color'>Combo</NavLink>
                            </li>
                            <li className='bg-transparent'>
                                <NavLink to='/location' className='py-2 px-4 font-semibold text-base text-text-color'>Location</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Badge className='hidden 2xl:inline-block text-center' content={cart.length}>
                        <IconButton className='py-2 px-12 bg-yellow text-lg hidden 2xl:inline-block' onClick={() => setOpen(!open)}>
                            CARD
                        </IconButton>
                    </Badge>
                    <Badge className='inline-block 2xl:hidden text-center' content={cart.length}>
                        <IconButton className='py-2 px-12 bg-yellow text-lg inline-block 2xl:hidden' onClick={() => setOpen(!open)}>
                            CARD
                        </IconButton>
                    </Badge>
                </div>
                <div className="flex justify-end">

                    <div className={`${resopen ? 'flex flex-col top-0' : '-top-full'} items-end xl:hidden overflow-auto bg-yellow transition-top fixed z-50 right-0 pt-8 p-6 w-screen h-screen`}>
                        <button className='inline-block xl:hidden mb-4' onClick={openMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <nav className={`space-y-2 flex-col flex`} >
                            <ul className='text-right space-y-1.5'>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/' className='font-semibold text-base text-text-color'>Home</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/pizza' className='font-semibold text-base text-text-color'>Pizza</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/paste' className='font-semibold text-base text-text-color'>Paste</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/soups' className='font-semibold text-base text-text-color'>Soups</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/salads' className='font-semibold text-base text-text-color'>Salads</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/beverages' className='font-semibold text-base text-text-color'>Beverages</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/desert' className='font-semibold text-base text-text-color'>Desert</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/antipasti' className='font-semibold text-base text-text-color'>Antipasti</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/stock' className='font-semibold text-base text-text-color'>Stock</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/combo' className='font-semibold text-base text-text-color'>Combo</Link>
                                </li>
                                <li className='bg-transparent'>
                                    <Link onClick={openMenu} to='/location' className='font-semibold text-base text-text-color'>Location</Link>
                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>



            <Drawer placement="right" overlay={false}
                size={'400px'}
                open={open} className="p-4 fixed top-0 ring-0">
                <div className="flex justify-between items-center py-5">
                    <h3 className='text-xl font-bold'>Card</h3>

                    <button onClick={() => setOpen(false)}>
                        <i className="bi bi-x text-2xl"></i>
                    </button>
                </div>
                <div className="py-2 mb-5">
                    <h2 className='text-2xl font-semibold text-yellow text-center'>Total Price {pul}₽</h2>
                </div>
                <ul className='space-y-3'>
                    {cart.map(piza => {
                        return (
                            <li className=' border border-gray-400 rounded-md p-2 relative' key={piza.id}>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center w-full max-w-[200px]">
                                        <img className='w-16' src={piza.img} alt="piza img" />
                                        <h3 className='ml-2'>{piza.title}</h3>
                                    </div>
                                    <button onClick={() => deleteCard(piza.id)} className='absolute top-2 right-2'>
                                        <i className='bi bi-x'></i>
                                    </button>
                                    <span>{piza.narx}₽</span>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <button onClick={() => handleMinus(piza)} disabled={piza.amount === 0} className='py-1 rounded-lg text-white px-3 bg-red-800 '>-</button>
                                    <span className='font-bold mx-2'>{piza.amount}</span>
                                    <button onClick={() => handlePlus(piza)} className='py-1 rounded-lg text-white px-3 bg-blue-gray-800'>+</button>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </Drawer>
            <Outlet />
        </header>
    )
}

export default Header

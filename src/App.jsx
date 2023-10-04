import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// layouts
import Rootlayout from './layouts/Rootlayout';
// pages
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Paste from './pages/Paste';
import Soups from './pages/Soups';
import Salads from './pages/Salads';
import Beverages from './pages/Beverages';
import Desert from './pages/Desert';
import AntiPasti from './pages/AntiPasti';
import Stock from './pages/Stock';
import Detail from './pages/Detail';
import Combo from './pages/Combo';
import Location from './pages/Location';
import NotFound from './NotFound/NotFound';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = ({ }) => {
  const [cart, setCart] = useState([])
  const addCart = (i) => {
    const olish = cart.find((e) => e.id === i.id)
    console.log(i);
    if (!olish) {
      setCart(cart => [...cart, i])
      toast.success("Cardga qo'shildi", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else(
      toast.error("bu oldindan mavjud", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    )
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout cart={cart} setCart={setCart}/>}>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Pizza addCart={addCart} cart={cart} setCart={setCart} />} />
        <Route path='/paste' element={<Paste addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/soups' element={<Soups addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/salads' element={<Salads addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/beverages' element={<Beverages addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/desert' element={<Desert addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/antipasti' element={<AntiPasti addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/stock/:id' element={<Detail />} />
        <Route path='/combo' element={<Combo addCart={addCart} cart={cart} setCart={setCart}/>} />
        <Route path='/location' element={<Location />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

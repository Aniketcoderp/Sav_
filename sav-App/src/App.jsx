import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import { Routes,Route } from 'react-router-dom';
import Product from './components/product/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
  
      
    </>
  )
}

export default App;

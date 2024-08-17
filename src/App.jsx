import { useState } from 'react'
import './App.css'
import Navber from './Navber/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Home/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

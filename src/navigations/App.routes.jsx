import React from 'react'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NavBar from '../components/NavBar'
function Approutes() {
  return (
<Router>
    <NavBar/>
    <Routes>
        <Route path='/' element ={<HomePage/>}/>
    </Routes>
</Router>
  )
}

export default Approutes

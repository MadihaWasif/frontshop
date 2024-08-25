import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Womens from './Components/Womens'
import Second from './Contexts/NewContext/Second'
import Buy from './Components/Buy'
import Mens from './Components/Mens'
import Kid from './Components/Kid'
import Login from './Components/Login'
import Handbags from './Components/Handbags'
import Display from './Components/Display'
import Cash from './Components/Cash'
import Makeup from './Components/Makeup'
import WCateg from './Components/WCateg'
import NewHandbags from './Components/NewHandbags'
import Aaa from './Components/Aaa'

import Buy2 from './Components/Buy2'




function App() {
  return (
    <>
    <Second>
    <Router>
    <div>
      <Navbar />
    </div>
   
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/women' element={<Womens />} />
    <Route path='/buy' element={<Buy/>} />
    <Route path='/men' element={<Mens/>} />
    <Route path='/kids' element={<Kid/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/handbags' element={<Handbags/>} />
    <Route path='/newBags' element={<NewHandbags/>}/>
    <Route path='handbags/buy/:id' element={<Buy/>} />
    <Route path='/display' element={<Display />} />
    <Route path='/cash' element={<Cash />} />
    <Route path='/makeup' element={<Makeup />} />
    <Route path='/wc' element={<WCateg/>} />
    <Route path='/aaaa' element={<Aaa/>} />
    <Route path='/buy2/men/:id' element={<Buy2/>} />
   
    

    
   

   
    </Routes>
    
    </Router>
   
    </Second>
    
    </>
  )
}

export default App


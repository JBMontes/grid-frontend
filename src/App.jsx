import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ShowAll from './components/ShowAll';
import Grid from './components/Grid';

function App() {
  

  return (
    <>
   <Router>

<NavBar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/grid" element={<ShowAll />} />
<Route path='/grid/grid' element={<Grid />} />

</Routes>


   </Router>
    </>
  )
}

export default App

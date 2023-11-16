import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ShowAll from './components/ShowAll';
import Detail from './components/Detail';
import TaskForm from './components/TaskForm';
import Edit from './components/Edit';

function App() {
  

  return (
    <>
   <Router>

<NavBar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/grid" element={<ShowAll />} />
<Route path='/grid/:id' element={<Detail />} />
<Route path='/grid/new' element={<TaskForm />} />
<Route path='/grid/:id/edit' element={<Edit />} />


</Routes>


   </Router>
    </>
  )
}

export default App

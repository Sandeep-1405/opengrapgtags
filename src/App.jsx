import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home.page.'
import Settings from './pages/settings.page'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/settings' element={<Settings/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App

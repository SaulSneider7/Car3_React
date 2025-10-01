import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Contenido from './components/contenido'
import Footer from './components/footer'

// Mis paginas
import Contacto from './pages/contacto'
import Caracteristicas from './pages/caracteristicas'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Hero />
                <Contenido />
              </>
            } 
          />
          <Route path='/caracteristicas' element={<Caracteristicas />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

// npm install react-router-dom
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
import Caracteristicas from './pages/caracteristicas'
import Contacto from './pages/contacto'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route 
            path='/'
            element={<Contenido />}
          />
          <Route 
            path='/caracteristicas'
            element={<Caracteristicas />}
          />
          <Route 
            path='/contacto'
            element={<Contacto />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

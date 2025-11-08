import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './page/Inicio'
import Error404 from './page/Error404'
import Movil from './page/Movil'
import Header from './components/Header'
import Footer from './components/Footer'
import Laptops from './page/Laptops'
import Comestibles from './page/Comestibles'
import Detalle from './page/Detalle'
import Categorias from './page/Categorias'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/movil' element={<Movil/>}/>
            <Route path='/*' element={<Error404/>}/>
            <Route path='/laptops' element={<Laptops/>}/>
            <Route path='/comestibles' element={<Comestibles/>}/>
            <Route path='/detalle/:id/:title' element={<Detalle/>}/>
            <Route path='/categorias/:cat' element={<Categorias/>}/>
          </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App

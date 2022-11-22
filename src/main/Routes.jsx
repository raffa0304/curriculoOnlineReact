import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from '../components/home/Home'
import Experiencia from '../components/experiencia/Experiencia'
import Contato from '../components/contato/Contato'

export default props => 
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path='/contato' element={<Contato />} />
        <Route path="*" element={<Home />} />
    </Routes>
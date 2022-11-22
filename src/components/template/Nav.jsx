import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link  to="/home">
                <i className=''></i> Sobre Mim
            </Link>
            <Link to="/experiencia">
                <i className=""></i> Experiência
            </Link>
            <Link to="/contato">
                <i className=""></i> Contato
            </Link>
            
        </nav>
    </aside>
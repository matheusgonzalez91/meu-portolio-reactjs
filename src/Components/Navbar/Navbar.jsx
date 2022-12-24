import React from 'react';
import DarkMode from '../DarkMode/DarkMode';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <header id='Navbar'>
        <div className="container">
            <div className="left">
                <div className="logo">Matheus Gonzalez</div>
                <DarkMode/>
            </div>

            <div className="right">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    
                    <Link spy={true} to='About' smooth={true} activeClass='activeClass'>
                        <li>Sobre</li>
                    </Link>
                    
                    <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'>
                        <li>Projetos</li>
                    </Link>
                    
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                        <button>Contato</button>
                    </Link>
                    
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Navbar;
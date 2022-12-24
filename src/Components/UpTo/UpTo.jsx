import React from 'react';
import Arrow from '../../images/up-arrow.png';
import { Link } from 'react-scroll';
import './UpTo.css';


const UpTo = () => {
  return (
    <div className="up">
      <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
        <img src={Arrow} alt="Arrow" />
      </Link>
    </div>
  )
}

export default UpTo
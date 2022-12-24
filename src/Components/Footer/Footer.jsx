import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <hr />
        <h2>Matheus de Souza Gonzalez</h2>
        <h2>Fullstack Developer</h2>
        <a href="https://www.linkedin.com/in/matheussouzagonzalez/" target="_blank"><FaLinkedin className='icons'/></a>
        <a href="https://github.com/matheusgonzalez91" target="_blank"><FaGithubSquare className='icons'/></a>
        <p>Todos os direitos reservados - © 2022 Matheus Gonzalez</p>
    </footer>
  )
}

export default Footer
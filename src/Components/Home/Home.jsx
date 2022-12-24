import React from 'react';
import './Home.css';
import bg from '../../images/bg.jpg';
import Cv from './Matheus CV.pdf';

const Home = () => {
  return (
    <div className="home">
        <div className="bg-home">
          <img src={bg} alt="bg home" />
        </div>

        <div className="descricao">
            <h2 className='main-h2'>Hi, I am</h2>
            <h2>Matheus Gonzalez</h2>
            <p>Fullstack Developer</p>
            <a href={Cv} download><button className='button-download'>Download CV</button></a>
        </div>
    </div>
  )
}

export default Home
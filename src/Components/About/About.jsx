import React, { useEffect } from 'react';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper'; 
import 'swiper/css/pagination';
import 'swiper/css';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

import Python from '../../images/python.png';
import PHP from '../../images/php.png';
import HTML from '../../images/html.png';
import CSS from '../../images/css.png';
import JavaScript from '../../images/js.png';
import ReactJS from '../../images/react-js.png';
import jQuery from '../../images/jquery.png';
import MySQL from '../../images/mysql.png';
import PostgreSQL from '../../images/postgresql.png';
import MongoDB from '../../images/mongodb.png';

const About = () => {

  useEffect(() =>{
    Aos.init({ duration: 2000 })
  }, []);

  const ling = [
    {
      img: Python,
      review: 'Python',
    },

    {
      img: PHP,
      review: 'PHP',
    },

    {
      img: HTML,
      review: 'HTML',
    },

    {
      img: CSS,
      review: 'CSS',
    },

    {
      img: JavaScript,
      review: 'JavaScript',
    }
  ]

  const dbs = [
    {
      img: MySQL,
      review: 'MySQL',
    },

    {
      img: PostgreSQL,
      review: 'PostgreSQL',
    },

    {
      img: MongoDB,
      review: 'MongoDB'
    }
  ]

  const frame = [
    {
      img: ReactJS,
      review: 'React JS',
    },

    {
      img: jQuery,
      review: 'jQuery'
    }
  ]

  return (
    <div className='sobre' id='About'>
        <div data-aos="slide-right" className="titulo-sobre">
            <h2>Sobre mim</h2>
            <p>Meu nome é Matheus de Souza Gonzalez, sou um amante de tecnologia e apaixonado em programar, eu diria que programação para mim virou parte da minha vida ao qual não consigo viver sem. Comecei em 2020 minhas primeiras linhas de código, estou cursando Análise e Desenvolvimento de Sistemas e estou no 4º Semestre. Além do Front-End eu também sei linguagens do Back-End como Python e PHP Aprender faz parte de mim, estou sempre em busca de evolução pois assim eu acredito que um bom profissional deve fazer.</p>
        </div>

        <div data-aos="slide-right" className="linguagens">
            <div className="titulo-linguagens"><h2>Linguagens</h2></div>
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
              {ling.map((ling, index)=>{
                return(
                  <SwiperSlide key={index}>
                    <div className='testimonial'>
                      <img src={ling.img} alt="" />
                      <span>{ling.review}</span>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </div>
        
        <div data-aos="slide-right" className="db">
          <div className="titulo-db"><h2>Banco de dados</h2></div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
              {dbs.map((dbs, index)=>{
                return(
                  <SwiperSlide key={index}>
                    <div className='testimonial2'>
                      <img src={dbs.img} alt="" />
                      <span>{dbs.review}</span>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </div>

        <div data-aos="slide-right" className="frameworks">
            <div className="titulo-frameworks"><h2>Frameworks</h2></div>
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
              {frame.map((frame, index)=>{
                return(
                  <SwiperSlide key={index}>
                    <div className="testimonial3">
                      <img src={frame.img} alt="" />
                      <span>{frame.review}</span>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </div>
    </div>
  )
}

export default About
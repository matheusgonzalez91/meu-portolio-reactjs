import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

// import Project from '../../images/projects.png';

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
        <div className="layer">
            {/* <img src={Project} alt="" /> */}
        </div>

        <div className="projects-desc">
            <h2>Meus Projetos</h2>
            <p>Todos os meus projetos que já desenvolvi estão em meu GitHub, dos projetos mais simples e até ao mais avançado deles.<br/> Projetos criados em diversas linguagens</p>
            <a href="https://github.com/matheusgonzalez91?tab=repositories" target="_blank"><button className='button-projects'><FaGithub className='github'/></button></a>
        </div>
    </div>
  )
}

export default Projects
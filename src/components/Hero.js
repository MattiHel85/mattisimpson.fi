import * as React from 'react';
import './Hero.css';
import Projects from './Projects';


const Hero = () => {
    return (
        <div className='hero'> 
            <h1>
                Matt Simpson | Junior Full Stack Developer
            </h1>
            <p>
                Welcome to my portfolio! While this is currently a placeholder, I am excited to showcase my future projects here. In the meantime, please feel free to explore my collection of student projects.
            </p>
            <Projects />
        </div>
    );
}

export default Hero;
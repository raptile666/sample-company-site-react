import React from 'react';
import Logos from '../Logos';
import '../styles/Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  
  return (
    <motion.div className='projectMain'
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <h1>Our Biggest Partners</h1>
      <div className='projectContainer'>
        {Logos.map((logo) => {
          return(
            <div className='logoContainer'>
              <img src={logo.image} alt={logo.text}
                onMouseEnter={( prop ) => 
                { prop.target.nextElementSibling.className = 'show' }} 
                
                onMouseLeave={( prop ) => 
                { prop.target.nextElementSibling.className = 'hide' }} />

              <h2 className='hide'>{logo.text}</h2>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Projects
import React from 'react';
import Pic404 from '../assets/404.png';
import '../styles/PageNotFound.css';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  return (
    <motion.div className='container-404'
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <div className='pic404' style={{ backgroundImage: `url(${Pic404})` }}></div>
      <div className='text404'>
        <h1>Page cannot be found</h1>
      </div>
    </motion.div>
  )
}

export default PageNotFound
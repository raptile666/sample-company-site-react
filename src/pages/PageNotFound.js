import React from 'react';
import Pic404 from '../assets/404.png';
import '../styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className='container-404'>
      <div className='pic404' style={{ backgroundImage: `url(${Pic404})` }}></div>
      <div className='text404'>
        <h1>Page cannot be found</h1>
      </div>
    </div>
  )
}

export default PageNotFound
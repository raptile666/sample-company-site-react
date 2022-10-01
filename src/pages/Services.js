import React, { useState } from 'react';
import '../styles/Services.css';
import { SupportAgent } from '@mui/icons-material';
import servicePic from '../assets/service-bg.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {

  const [firstList, setFirstList] = useState('activeList');
  const [secondList, setSecondList] = useState('disabledList');
  const [thirdList, setThirdList] = useState('disabledList');
  const [firstButton, setFirstButton] = useState('activeButton');
  const [secondButton, setSecondButton] = useState('disabledButton');
  const [thirdButton, setThirdButton] = useState('disabledButton');

  const firstButtonClick = () => {
    setFirstList('activeList');
    setFirstButton('activeButton');
    setSecondList('disabledList');
    setSecondButton('disabledButton');
    setThirdList('disabledList');
    setThirdButton('disabledButton');
  }

  const secondButtonClick = () => {
    setFirstList('disabledList');
    setFirstButton('disabledButton');
    setSecondList('activeList');
    setSecondButton('activeButton');
    setThirdList('disabledList');
    setThirdButton('disabledButton');
  }

  const thirdButtonClick = () => {
    setFirstList('disabledList');
    setFirstButton('disabledButton');
    setSecondList('disabledList');
    setSecondButton('disabledButton');
    setThirdList('activeList');
    setThirdButton('activeButton');
  }

  return (
    <motion.div className='serviceMain' style={{backgroundImage: `url(${servicePic})`}}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <div className='desktopView'>
        <h1>Services</h1>
        <SupportAgent />
        
        <div className='serviceContainerDesk'>
          <div className='serviceButtonsDesk'>
            <button className={firstButton} id='leftButton' onClick={() => {firstButtonClick()}}>List 1</button>
            <button className={secondButton} onClick={() => {secondButtonClick()}}>List 2</button>
            <button className={thirdButton} id='rightButton' onClick={() => {thirdButtonClick()}}>List 3</button>
          </div>
        

          <div className="serviceTextDesk">
            <ul className={firstList}>
              <li>Apple</li>
              <li>Pear</li>
              <li>Peach</li>
              <li>Strawberry</li>
              <li>Plum</li>
              <li>Pineapple</li>
              <li>Redcurrant</li>
              <li>Blueberry</li>
              <li>Raspberry</li>
            </ul>

            <ul className={secondList}>
              <li>Carrot</li>
              <li>Parsley</li>
              <li>Radish</li>
              <li>Onion</li>
              <li>Celery</li>
              <li>Cabbage</li>
              <li>Bean</li>
            </ul>
            
            <ul className={thirdList}>
              <li>Wheat</li>
              <li>Corn</li>
              <li>Barley</li>
              <li>Rye</li>
            </ul>
          </div>

        </div>
        
        <Link to='/contact'><button className='contactButton'>Contact</button></Link>
      </div>

      <div className='phoneView'>
        <h1>Services</h1>
        <SupportAgent /> 
      </div>
    </motion.div>
  )
}

export default Services
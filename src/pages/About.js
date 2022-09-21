import React from 'react';
import CountUp from 'react-countup';
import AboutPic from '../assets/about-bg.jpg';
import { Link } from 'react-router-dom';
import '../styles/About.css'

const About = () => {

  return (
    <div className='about-main'>
      <div className='about-detail' style={{ backgroundImage: `url(${AboutPic})` }}>
        <h1>What is this?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sequi, cupiditate accusantium, voluptatum fugiat voluptate, dolorum nulla voluptas velit delectus in saepe eius placeat? Inventore quo necessitatibus eius dicta, quibusdam tenetur quasi quae voluptas veniam magnam sed a, eos impedit, vitae esse delectus eveniet asperiores temporibus ullam voluptatibus aspernatur commodi exercitationem in officia. Beatae culpa atque qui repellat ex aperiam tempore, hic porro adipisci praesentium voluptatibus, modi explicabo et odio eius repellendus!</p>
        <Link to='/contact'><button>Contact</button></Link>
      </div>

      <div className='about-small'>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />Ipsam maxime suscipit veritatis placeat?</h2>
      </div>

      <div className="counter-cont">
        <h2>Let the counts begin!</h2>
        <div className='counters'>
          <div className="count">
            <CountUp end={35} duration={2} delay={.5} />
            <h4>Count 1</h4>
          </div>

          <div className="count">
            <CountUp end={32410} duration={2} delay={.5} />
            <h4>Count 2</h4>
          </div>

          <div className="count">
            <CountUp end={95} duration={2} suffix=" %" delay={.5} />
            <h4>Count 3</h4>
          </div>

          <div className="count">
            <CountUp end={3} duration={2} delay={.5} />
            <h4>Count 4</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
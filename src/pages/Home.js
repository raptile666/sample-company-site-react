import React from 'react';
import '../styles/Home.css';
import HomePic from '../assets/home-bg.jpg';
import { Link } from 'react-router-dom';
import { LocalFireDepartment, Engineering, SportsMotorsports } from '@mui/icons-material';

const Home = () => {
  return (
    <div className='home-main'>
      <div className='detail' style={{ backgroundImage: `url(${HomePic})` }}>
        <h1>The Big Title</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, temporibus provident? Asperiores id beatae illo repellendus earum ea reiciendis vero iusto provident, facere deleniti consequatur laborum quaerat facilis itaque odit voluptatem repudiandae sint? Ullam mollitia fugiat ipsa ipsum, asperiores hic dolores ab distinctio quae aspernatur nesciunt porro quis, aliquam dolore?</p>
        <Link to='/contact'><button>Contact</button></Link>
      </div>

      <div className='table'>
        <div className='cell'>
          <div className='pic'><LocalFireDepartment /></div>
        <div className='pictext'>
          <h1>First</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis eum officiis quis!</p>
          </div>
        </div>

        <div className='cell'>
          <div className='pic'><Engineering /></div>
          <div className='pictext'>
            <h1>Second</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem perferendis fugiat quaerat iste quam?</p>
          </div>
        </div>

        <div className='cell'>
          <div className='pic'><SportsMotorsports /></div>
          <div className='pictext'>
            <h1>Third</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
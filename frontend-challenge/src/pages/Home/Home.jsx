import React from 'react';
import './Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Create a home page that holds buttons for both the Slider and the Puzzle URL's
    <div id='home'>
        <h2 className='head-text-home'>Reid Schroder Coding Challenge</h2>
        <div className='app__flex'>
           <Link to='../slider'><button>Slider</button></Link> 
        </div>
        <div className='app__flex'>
           <Link to='../Puzzle'><button>Puzzle</button></Link> 
        </div>
    </div>
  );
}

export default Home;
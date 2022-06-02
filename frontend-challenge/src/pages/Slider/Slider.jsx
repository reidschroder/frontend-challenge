import React from 'react';
import './Slider.scss';



const Slider = () => {
    return (
       // creating a container for the slider. 32 slides in total for the final product
        <div className="container">

          <div className="slide">
              <img src="../../assets/images/AFC/AFC_north/joe_burrow.jpg" alt="Joe Burrow" />
              <img src="../../assets/images/AFC/AFC_north/baker_mayfield.jpg" alt="Baker Mayfield" />
              <img src="../../assets/images/AFC/AFC_north/lamar_jackson.jpg" alt="Lamar Jackson" />
              <img src="../../assets/images/AFC/AFC_north/mitch_trubisky.jpg" alt="Mitch Trubisky" />
          </div>
          {/* <div className="slide">
            
          <h2>Baker Mayfield</h2>
          <h4>Cleveland Browns</h4>
        </div>
        <div className="slide">
            
          <h2>Lamar Jackson</h2>
          <h4>Baltimore Ravens</h4>
        </div>
        <div className="slide">
            
          <h2>Mitch Trubisky</h2>
          <h4>Pittsburgh Steelers</h4>
        </div> */}
        <div className='last'></div>
        <div className='next'></div>
        </div>
      
    );
}

export default Slider;
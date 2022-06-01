import React from 'react';
import './Slider.scss';

const Slider = () => {
    return (
       // creating a container for the slider. 32 slides in total for the final product
        <div class="container">
          <div class="slide">
              <img src="../../assets/images/AFC/AFC_north/joe_burrow.jpg" alt="Joe Burrow" />
            <h2>Joe Burrow</h2>
            <h4>Cincinnati Bengals</h4>
          </div>
          <div class="slide">
            <img src="../../assets/images/AFC/AFC_north/baker_mayfield.jpg" alt="Baker Mayfield" />
          <h2>Baker Mayfield</h2>
          <h4>Cleveland Browns</h4>
        </div>
        <div class="slide">
            <img src="../../assets/images/AFC/AFC_north/lamar_jackson.jpg" alt="Lamar Jackson" />
          <h2>Lamar Jackson</h2>
          <h4>Baltimore Ravens</h4>
        </div>
        <div class="slide">
            <img src="../../assets/images/AFC/AFC_north/mitch_trubisky.jpg" alt="Mitch Trubisky" />
          <h2>Mitch Trubisky</h2>
          <h4>Pittsburgh Steelers</h4>
        </div>
        </div>
    );
}

export default Slider;
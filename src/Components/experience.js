import React from 'react';
import './experience.css';

import car from '../assests/car.png';
import fylloLogo from '../assests/fyllo-logo.png';

const Experience = () => {
  const [isStarted, setIsStarted] = React.useState(false)
  const startRef = React.useRef(null);
  const endRef = React.useRef(null);

  const [startPosition, setStartPosition] = React.useState({x:0, y:0})
  const [endPosition, setEndPosition] = React.useState({x:0, y:0})
  const [topValue, setTopValue] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const x1 = startRef.current.offsetLeft;
    const y1 = startRef.current.offsetTop;

    const y2 = endRef.current.offsetTop;

    setStartPosition({ x: x1, y: y1 });
    setEndPosition({ x: x1, y: y2 });
    setTopValue(y1);
  }, [])

  const style = {
    position: 'absolute',
    left: startPosition.x,
    top: topValue,
    height: '50px',
    width: '50px',
    transform: 'rotate(180deg) translateX(12px)',
    transition: 'all 2s ease-out',
  }

  const logoStyle = {
    width: '1.3em',
    height: '1.3em',
  }

  const handleStartClick = () => {
    setIsStarted(true)
    
    if(topValue === endPosition.y){
      setTopValue(startPosition.y)
      setIsVisible(false)
    }
    else{
      setTopValue(endPosition.y)
      setIsVisible(true)
    }

    setTimeout(function(){
      setIsStarted(false)
    }, 2000)
  }

  return (
    <div className="experience">
      <div className='track'>
        <div className="point start" ref={startRef}></div>
        <div className='point end' ref={endRef}></div>
      </div>

      <div className='start-button'>
        <button onClick={handleStartClick} disabled={isStarted}>{topValue === endPosition.y ? 'Reset' : 'Start'}</button>
      </div>

      <img src={car} style={style} alt='top view of car'/>

      <div className={`experience-detail ${isVisible ? 'visible' : ''}`}>
        <div className='info'>
          <div className='company-name'><span><img src={fylloLogo} style={logoStyle} alt='comapny logo' /></span> <b>FYLLO</b></div>

          <div className='duration'>Oct 2023 - Feb 2024</div>
        </div>

        <div className='position'><i>Machine Learning Engineer Intern</i></div>

        <div className='key-points'>
          <ul>
            <li><b>Remote Sensing:</b> Successfully developed and implemented a machine learning model using Google Earth
                Engine, specializing in boundary detection and crop classification.</li>

            <br></br>
            
            <li><b>Enhanced ML model:</b> Improved the recall value of the machine learning model for predicting leaf wetness
                from 0.87 to 0.93, aiding farmers in optimizing agricultural practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from 'react';
import './index.css';
import bot3 from '../../assets/Chatbot.png'

const Home = () => (
  <div className='HeroSection'>

    <div className='heroLeft'>

      <div className='text'>
        <h1 className="mainHeading">Ai<span id='mainHeading__span'>CHATBOT</span></h1>
        <p className='para'>Propel your business with our top-notch chatbot development services. We build intelligent and natural language understanding Chatbots, powered by AI, ML, and NLP, to help businesses automate their processes, improve marketing reach, and streamline the customer experience.</p>
        <br />
        <button className='text__btn'>READ MORE</button>
      </div>

    </div>

    <div className='heroRight'>
      <img src={bot3} alt="Ai Robot" className='aiRobot' />
    </div>


  </div>
)

export default Home

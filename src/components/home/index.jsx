import React from 'react';
import './index.css';
import bot3 from '../../assets/Chatbot.png'

const Home = () => (
  <div className='container'>

    <div className='textBox'>

      <div className='textBox__content'>
        <h1>Ai<span id='textBox__head__span'>CHATBOT</span></h1>
        <p>Propel your business with our top-notch chatbot development services. We build intelligent and natural language understanding chatbots, powered by AI, ML, and NLP, to help businesses automate their processes, improve marketing reach, and streamline the customer experience.</p>
        <br />
        <button>READ MORE</button>
      </div>

    </div>

    <div className='imgBox'>
      <img src={bot3} alt="Ai Robot" className='aiRobo' />
    </div>


  </div>
)

export default Home

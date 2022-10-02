import React from 'react'
import { SiRobotframework } from 'react-icons/si';
import './index.css'

const Navbar = () => (

    <div>
        <nav className="navContainer">

            <div className="left">
                <SiRobotframework size='1.7em'></SiRobotframework>
                <span id='logoHeading'>Chatbot</span>
            </div>

            <div className="right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <button id='navBtn'>SIGN IN</button>
                </ul>
            </div>

        </nav>
    </div>
)


export default Navbar

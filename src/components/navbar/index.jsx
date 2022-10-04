import React from 'react';
import './index.css';

// import All Components
import Home from '../home';
import Pricing from '../pricing';
import About from '../about';
import Contact from '../contact';
import SignIn from '../sign in';

import { SiRobotframework } from 'react-icons/si';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";



const Navbar = () => (

    <div>


        <BrowserRouter>
            <nav className="navContainer">

                <div className="left">
                    <SiRobotframework size='1.7em'></SiRobotframework>
                    <span id='logoHeading'>Chatbot</span>
                </div>

                <div className="right">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/signIn"><button id='navBtn'>SIGN IN</button></Link>
                        </li>
                    </ul>
                </div>

            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signIn" element={<SignIn />} />
            </Routes>

        </BrowserRouter>


        {/* <nav className="navContainer">

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

        </nav> */}

    </div>
)


export default Navbar

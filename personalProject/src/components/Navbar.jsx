import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaStar, FaCode, FaPenAlt, FaPalette, FaLightbulb } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar-glass">
            <div className="nav-container">
                <Link 
                    to="home" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaHome />
                </Link>

                <Link 
                    to="aboutMe" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaUser />
                </Link>

                <Link 
                    to="value" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaStar />
                </Link>

                <Link 
                    to="meService" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaCode />
                </Link>

                <Link 
                    to="txt" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaPenAlt />
                </Link>

                <Link 
                    to="designContent" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaPalette />
                </Link>

                <Link 
                    to="creativity" 
                    smooth={true} 
                    duration={500}
                    className="nav-icon"
                    activeClass="active"
                >
                    <FaLightbulb />
                </Link>
            </div>
        </nav>
    );
}
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

function Header() {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = ()=>{
    setIsOpen(!isOpen);
};

    return (
        <>
            <div className="container">
                <div className="div-header">
                    <img style={{ width: "8rem" }} src="/Images/Benmyl_Logo_colorful-01 copy.png" alt="img" />

                    <ul className={isOpen? "nav-link active" : "nav-link"}>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Contct Us</a></li>
                    </ul>

                    <span className='icon' onClick={toggleMenu}><FaBars /></span>
                </div>
            </div>
        </>
    )
}

export default Header
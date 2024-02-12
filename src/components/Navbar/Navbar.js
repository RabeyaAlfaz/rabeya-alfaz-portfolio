import React from 'react'
import {motion} from 'framer-motion';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <Sidebar></Sidebar>
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:0.5}} transition={{duration:0.5}}><a href='https://drive.google.com/file/d/155QUhWNFFaV9hPmEEDkAI5d37BpO3QgN/view?usp=sharing'>Rabeya Alfaz(Resume)</a></motion.span>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/rabeya-alfaz-2b39a3270/"><img src="/linkedIn.png" alt="" /></a>
                <a href="https://github.com/RabeyaAlfaz"><img src="/github.jpg" alt="" /></a>
                <a href="#"><img src="/facebook.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import {motion} from 'framer-motion';
import './Services.scss'
const variants = {
    initial:{
        x:-500,y:100,
        opacity:0
    },
    animate:{
              x:0,
              opacity:1,y:0,
              transition:{
                    duration:1,
                    staggerChildren:0.1
              }
    }
}
const Services = () => {
    return (
        <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>for your </motion.b>business</h1>
                    <button>What We Do</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Deesigning and giving ideas</h1>
                    <p>
                    Product design helps you design better products based on user experiences, feedback, and market potential. By incorporating key user insights into your product roadmap and backlog, you can: Create innovative products. Improve the user experience
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Developing Eye Catching site with React js,HTml,CSS or JS</h1>
                    <p>
                    Considering the amount of time people spend on the internet, businesses too have moved online. Having a website with a presence on social media has become the need of the hour. If you are a business owner and do not own a website, you might be losing a lot of potential customers online. Therefore, knowing the importance of a website is key to growing your business exponentially
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Developing responsive front end</h1>
                    <p>
                     A responsive website has a fluid and flexible layout which adjusts according to screen size. The importance of responsive web design is that it offers an optimized browsing experience. Basically, your website will look great and work well on a desktop (or laptop), a tablet, and a mobile phone's browser.
                    </p>
                    <button>button</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
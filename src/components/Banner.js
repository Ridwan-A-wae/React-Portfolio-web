/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import icons
import { FaGithub, FaYoutube, FaDribbble, FaFacebook, FaLine } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] font-bold leading-[0.8] lg:text-[72px]"
            >
              RID <span>WAN</span>
            </motion.h1>
            <motion.div
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span style={{fontSize:"35px"}} className="mr-4 text-white">I am a junior  </span>
              <br/> 
              <div>
              <TypeAnimation
                sequence={[
                  "Full-stack",
                  2000,
                  "Front-end",
                  2000,
                  "Back-end",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              </div>
              
            </motion.div>
            <motion.p 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              A man who dreams of becoming the most skilled full stack developer he can possibly be.
            </motion.p>
            <motion.div 
             variants={fadeIn("up", 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div>
            {/* social links */}
            <motion.div 
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a target="_blank" href="https://www.facebook.com/waaaaaan/">
                <FaFacebook />
              </a>
              <a target="_blank" href="https://github.com/Ridwan-A-wae">
                <FaGithub />
              </a>
              <a target="_blank" href="https://line.me/ti/p/y9DiT77H0r?fbclid=IwAR20K5qTDvQ6E2JzwPpF-J8TCkB4gm_Erd_cWqmYSbr2KK7dj19KP7PWSwk">
                <FaLine />
              </a>
            </motion.div>
          </div>
          {/* images */}
          <motion.div 
           variants={fadeIn("down", 0.5)}
           initial="hidden"
           whileInView={"show"}
           
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] w-96 ">
          <a href="#"><img src="https://i.imgur.com/6xWcGEE.png" title="source: imgur.com" /></a>              
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Banner;

import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.1, // Added delay to ensure each letter appears in sequence
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  hover: {
    scale: 1.2,
    color: "#ffcc00",
    transition: {
      duration: 0.3,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const roles = [
  "Web Developer",
  "UI Designer",
  "Photographer",
  "Writer",
  "Artist",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderText = (text) => {
    return text.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        whileHover="hover"
        className="letter"
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="name">
            {renderText("SUBHANKAR")} {renderText("DEY")}
          </motion.h2>
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[currentRoleIndex]}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderText(roles[currentRoleIndex])}
            </motion.h1>
          </AnimatePresence>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => {
                document.getElementById("Projects").scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See My Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => {
                document.getElementById("Contact").scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </motion.button>
          </motion.div> */}
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        HTML CSS JavaScript ReactJS Bootstrap Material UI Tailwind NodeJS ExpressJS MongoDB
      </motion.div>
      <div className="imageContainer">
        <img src="/hero_new.png" alt="" />  
      </div>
    </div>
  );
};

export default Hero;

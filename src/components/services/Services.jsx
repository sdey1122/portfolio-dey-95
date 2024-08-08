import { useRef } from "react";
import "./Services.css";
import { motion, useInView } from "framer-motion";
import { GiKnot } from "react-icons/gi";  

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="services" ref={ref}>
      <motion.div className="textContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.p variants={textVariants} animate="animate" >
          I am dedicated to propelling your brand to new heights with my diverse skill set
          <br /> and forward-thinking approach
        </motion.p>
        <hr />
      </motion.div>
      <div className="experience">
        <div className="companyDetails">
          <p>JIS College of Engineering</p>
          <p>July 2015 - September 2019</p>
        </div>
        <GiKnot className="knotIcon" />
        <div className="skillsDetails">
          <p>Bachelor of Technology (B.Tech) in</p>
          <p>Computer Science and Engineering</p>
        </div>
      </div>
      <div className="experience">
        <div className="companyDetails">
          <p>West Bengal University of Technology</p>
          <p>August 2020 - August 2022</p>
        </div>
        <GiKnot className="knotIcon" />
        <div className="skillsDetails">
          <p>Master of Technoloy (M.Tech) in</p>
          <p>Information Technology</p>
        </div>
      </div>
      <div className="experience">
        <div className="companyDetails">
          <p>Lincesoft Solution Private Limited</p>
          <p>March 2021 - January 2024</p>
        </div>
        <GiKnot className="knotIcon" /> 
        <div className="skillsDetails">
          <p>Frontend Developer</p>
          <p>Skills: HTML, CSS, Bootstrap, JavaScript</p>
        </div>
      </div>
      <div className="experience">
        <div className="companyDetails">
          <p>Helson Software Solutions Private Limited</p>
          <p>Februart 2024 - Present</p>
        </div>
        <GiKnot className="knotIcon" />
        <div className="skillsDetails">
          <p>Web Developer</p>
          <p>Skills: HTML, CSS, Material UI, JavaScript, React JS, Node JS, Express JS, MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

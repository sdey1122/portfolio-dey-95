import { useRef } from "react";
import "./Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Todo List",
    img: "https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "This app features a modern, intuitive design, allowing users to effortlessly add, edit, and delete tasks. Leveraging React hooks for efficient state management and Material UI for a polished look, the app is fully responsive, ensuring a seamless experience across all devices. This project highlights my ability to build high-quality, user-friendly web applications.",
    demoUrl: "https://master--todolist-rdev.netlify.app/"
  },
  {
    id: 2,
    title: "React Calculator",
    img: "https://images.unsplash.com/photo-1653361860636-36f2fb89eab9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "This app combines a modern design with intuitive functionality, allowing users to perform calculations effortlessly. With responsive styling and smooth animations, it provides an engaging user experience across all devices. This project showcases my skills in creating high-quality, user-friendly web applications with a professional look.",
    demoUrl: "https://calculator-rdev.netlify.app"
  },
  {
    id: 3,
    title: "React Weather App",
    img: "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "This app features a clean, modern design, providing real-time weather updates and forecasts with a seamless user experience. Leveraging responsive design and engaging visuals, it ensures optimal performance across all devices. This project highlights my ability to create functional and visually appealing web applications.",
    demoUrl: "https://weather-rdev.netlify.app"
  },
  {
    id: 4,
    title: "TIC-TAC-TOE Game",
    img: "https://images.unsplash.com/photo-1608111283390-2e333b9b279c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "This app offers a seamless shopping experience with features like product browsing, secure checkout, and user authentication. The sleek, responsive design, enhanced by Material UI, ensures optimal performance on all devices. This project showcases my expertise in developing full-stack web applications with a focus on functionality and user experience.",
    demoUrl: "https://tictactoe-rdev.netlify.app"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h4 style={{ fontSize: "50px"}}>{item.title}</h4>
            <p style={{ color: "white"}}>{item.desc}</p>
            {item.demoUrl && (
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-button">
                See Demo
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

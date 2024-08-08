import Sidebar from "../sidebar/Sidebar";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaInstagram />
            </motion.div>
          </a>
          <a href="https://www.linkedin.com/in/subhankar-dey25/" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaLinkedin />
            </motion.div>
          </a>
          <a href="https://github.com/sdey1122" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaGithub />
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

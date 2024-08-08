import { motion } from "framer-motion";
import { FaHamburger } from "react-icons/fa";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
      <motion.div
        animate={{
          rotate: setOpen ? 360 : 0,
          transition: { duration: 0.3 },
        }}
      >
        <FaHamburger size={25} color="black" />
      </motion.div>
    </button>
  );
};

export default ToggleButton;

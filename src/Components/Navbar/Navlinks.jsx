import { motion } from "framer-motion";

const Navlinks = ({ isMobile, closeMobileMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#">Home</a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#">Services</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#">Work</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#">Contact Us</a>
      </motion.li>
    </ul>
  );
};

export default Navlinks;

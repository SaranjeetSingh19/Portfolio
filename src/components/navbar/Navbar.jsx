import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
        <a href="https://www.instagram.com/saran._.19/">
            <img src="/instagram.png" alt="not found" />
          </a>
          <a href="https://github.com/SaranjeetSingh19">
            <img src="/github.png" alt="not found" />
          </a>
          <a href="https://www.linkedin.com/in/saran-jeet-276141307/">
            <img src="/linkedin.png" alt="not found" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

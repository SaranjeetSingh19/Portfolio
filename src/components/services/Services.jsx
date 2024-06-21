import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import SkillList from "./SkillList";

const variants = {
  initial: {
    x: '-100vw',
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const variants2 = {
  initial: {
    x: '-100vw',
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

import checkMark from "../services/svg/checkmark.svg";

function Services() {
  const ref = useRef();

  const isInView = useInView(ref);

  return (
    <motion.section
      className="skills"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <motion.h1 whileHover={{}} className="sectionTitle">SKILLS.</motion.h1>
      <motion.div className="container"  >
        <SkillList src={checkMark} skill="JavaScript" />
        <SkillList src={checkMark} skill="TypeScript" />
        <SkillList src={checkMark} skill="Node" />
        <SkillList src={checkMark} skill="Express" />
        <SkillList src={checkMark} skill="Socket.IO" />
      </motion.div>
      <hr />
      <motion.div className="container" variants={variants}>
        <SkillList src={checkMark} skill="React" />
        <SkillList src={checkMark} skill="Tailwind CSS" />
        <SkillList src={checkMark} skill="Material UI" />
        <SkillList src={checkMark} skill="Framer Motion" />
      </motion.div>
      <hr />
      <motion.div className="container" variants={variants2}>
        <SkillList src={checkMark} skill="Redux" />
        <SkillList src={checkMark} skill="Rtk Query" />
        <SkillList src={checkMark} skill="Git" />
        <SkillList src={checkMark} skill="Gsap" />
        <SkillList src={checkMark} skill="Docker" />
        <SkillList src={checkMark} skill="MongoDB" />
      </motion.div>
    </motion.section>
  );
}

export default Services;

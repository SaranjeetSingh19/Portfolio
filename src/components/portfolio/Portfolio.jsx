import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CHAT ADDA",
    img: "/chatAdda.jpg",
    desc: "Developed a real-time chat application similar to WhatsApp with React.js, Redux, and Material-UI. Built the backend with Node.js, Express.js, and Socket.IO for real-time communication. Managed data with MongoDB, integrated Cloudinary for image storage, and used React Chart.js for interactive analytics.",
    link: "https://chat-app-frontend-blond-seven.vercel.app/",
  },
  {
    id: 2,
    title: "SHIFSY-AI",
    img: "/shifsy.png",
    desc: "Developed Shifsy-GPT, an e-commerce platform, using the MERN stack for scalability. Managed state with Redux and RTK Query, and styled with Tailwind CSS. Integrated GPT-like features via the Gemini API for AI-driven functionalities. Used Cloudinary for image storage, Multer for file uploads, and React Apex Charts for data visualization.",
    link: "https://github.com/SaranjeetSingh19/Shifsy-AI",
  },
  {
    id: 3,
    title: "YOUDUPE",
    img: "/yt.jpg",
    desc: "Developed YouDupe, a YouTube clone, using React.js and Redux for state management, with Tailwind CSS for styling. Integrated YouTube API and YouTube Search API for video data. Implemented debouncing for optimized search functionality and added a live chat feature for real-time interaction.",
    link: "https://youdupe.vercel.app/",
  },
  //   {
  //     id: 4,
  //     title: "REJOUICE",
  //     img: "",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //      link: "https://youdupe.vercel.app/"
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
           <a href={item.link}>Visit</a>
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

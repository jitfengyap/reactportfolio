import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a web developer",
//     imgURL: images.about01,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am a web developer",
//     imgURL: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description: "I am a web developer",
//     imgURL: images.about03,
//   },
//   {
//     title: "MERN Stack",
//     description: "I am a web developer",
//     imgURL: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tweeb" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgURL)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");

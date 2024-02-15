import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashutosh Chaubey</h1>
        <p className={styles.description}>
          I am a passionate Competitive programmer and Fullstack Web Developer, who loves to transform
          ideas into reality using code.I am pursuing bachelor of technology at Indian Institute of Technology(IIT) Dhanbad.
          I am a problem solving enthusiast and I like to learn about new technologies. 
        </p>
        <a href="https://drive.google.com/file/d/1C1DrO8b_BVgQhb-2tKYg6AUkQ_l8dBNx/view?usp=sharing" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

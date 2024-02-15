import React from "react";

import styles from "./cp.module.css";

import projects from "../../data/cp.json";
import { CpCard } from "./cpCard";

export const Cp = () => {
  return (
    <section className={styles.container} id="competitive">
      <h2 className={styles.title}>Competitive Programming</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <CpCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

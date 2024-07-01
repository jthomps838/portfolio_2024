import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../ProjectCard";

import { projectConfig } from "../../config/projectConfig";

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projectConfig.length
          ? projectConfig.map(({ src, link, h3, p }, i) => (
              <ProjectCard key={i} src={src} link={link} h3={h3} p={p} />
            ))
          : null}
      </div>
    </section>
  );
}

export default Projects;

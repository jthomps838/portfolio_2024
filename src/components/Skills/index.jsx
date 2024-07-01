import styles from "./SkillsStyles.module.css";
import { skillConfig } from "../../config/skillConfig";
import SkillList from "../SkillList";

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <h2 className='sectionSubtitle'>Web UI</h2>
      <div className={styles.skillList}>
        {skillConfig.frontend
          ? skillConfig.frontend.map((skill, i) => (
              <SkillList key={i} src={skill["icon"]} skill={skill["name"]} />
            ))
          : null}
      </div>
      <hr />
      <h2 className='sectionSubtitle'>Backend</h2>
      <div className={styles.skillList}>
        {skillConfig.backend
          ? skillConfig.backend.map((skill, i) => (
              <SkillList key={i} src={skill["icon"]} skill={skill["name"]} />
            ))
          : null}
      </div>
      <hr />
      <h2 className='sectionSubtitle'>Other Tech</h2>
      <div className={styles.skillList}>
        {skillConfig.other
          ? skillConfig.other.map((skill, i) => (
              <SkillList key={i} src={skill["icon"]} skill={skill["name"]} />
            ))
          : null}
      </div>
    </section>
  );
}

export default Skills;

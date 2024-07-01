import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt='Profile picture of Joseph Thompson'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Joseph
          <br />
          Thompson
        </h1>
        <h2>Full Stack Engineer</h2>
        <span>
          <a href='https://github.com/jthomps838' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/joseph-m-thompson-2019/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='Linkedin icon' />
          </a>
        </span>
        <p className={styles.description}>
          "Building bridges between pixels and databases, crafting seamless
          digital experiences from frontend finesse to backend brilliance."
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

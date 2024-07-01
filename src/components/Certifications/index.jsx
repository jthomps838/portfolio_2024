import styles from "./CertificationStyles.module.css";
import { certificationConfig } from "../../config/certificationConfig";
import CertificationCard from "../CertificationCard";

function Certifications() {
  return (
    <section id='certifications' className={styles.container}>
      <h1 className='sectionTitle'>Certifications</h1>
      <div className={styles.certificationList}>
        {certificationConfig
          ? certificationConfig.map((cert, i) => (
              <CertificationCard key={i} cert={cert} />
            ))
          : null}
      </div>
    </section>
  );
}

export default Certifications;

import { shape, string } from 'prop-types';
import styles from './CertificationCard.module.css';
function CertificationCard({ cert: { src, link, name } }) {
    return (
        <a
            href={link}
            target='_blank'
            className={styles.hover}
        >
            <img
                src={src}
                alt={name}
            />
            <h3>{name}</h3>
        </a>
    );
}

export default CertificationCard;

CertificationCard.propTypes = {
    cert: shape({ src: string, link: string, name: string }),
};

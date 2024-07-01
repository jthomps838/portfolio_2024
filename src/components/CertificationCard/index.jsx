import { string, shape } from "prop-types";

function CertificationCard({ cert: { src, link, name } }) {
  return (
    <a href={link} target='_blank'>
      <img className='hover' src={src} alt={name} />
      <h3>{name}</h3>
    </a>
  );
}

export default CertificationCard;

CertificationCard.propTypes = {
  cert: shape({ src: string, link: string, name: string }),
};

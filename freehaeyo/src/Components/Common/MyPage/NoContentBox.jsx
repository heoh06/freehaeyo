import { Link } from 'react-router-dom';

function NoContentBox({ text }) {
  const { title, subtitle, buttonPhrase, buttonLink } = text;
  return (
    <>
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
        <button>
          <Link to={buttonLink}>{buttonPhrase}</Link>
        </button>
      </div>
    </>
  );
}

export default NoContentBox;

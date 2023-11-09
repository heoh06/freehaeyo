import Tag from './Tag';
import { Link } from 'react-router-dom';

function NameCard({ userData }) {
  const { id, name, phone, email, stack } = userData;

  return (
    <li>
      <Link to={`/userinfo/${id}`}>
        <div>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <ul>
          {stack?.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </ul>
      </Link>
    </li>
  );
}

export default NameCard;

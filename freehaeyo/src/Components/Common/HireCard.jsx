import Tag from './Tag';
import CompanyData from '../../MockData/CompanyData.json';
import DueDate from './HireInfo/DueDate';

import { Link } from 'react-router-dom';

function HireCard({ employmentData }) {
  const { id, title, createdAt, stacks, companyId } = employmentData;

  const currentCompanyData = CompanyData.filter(
    (company) => company.id === companyId,
  );
  const { name, region } = currentCompanyData[0];

  return (
    <li>
      <Link to={`/hireinfo/${id}`}>
        <ul>
          <DueDate createdAt={createdAt}></DueDate>
        </ul>
        <div>
          <p>{title}</p>
          <p>{name}</p>
          <p>{region}</p>
        </div>
        <ul>
          {stacks?.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </ul>
      </Link>
    </li>
  );
}

export default HireCard;

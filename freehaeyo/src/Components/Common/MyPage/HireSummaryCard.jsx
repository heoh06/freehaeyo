import DueDate from '../HireInfo/DueDate';

import { Link } from 'react-router-dom';

import CompanyData from '../../../MockData/CompanyData.json';

function HireSummaryCard({ employmentData }) {
  const { title, dueDate, companyId } = employmentData;
  const currentCompanyData = CompanyData.filter(
    (company) => company.id === companyId,
  );
  const { name, region } = currentCompanyData[0];
  return (
    <li>
      <ul>
        <DueDate dueDate={dueDate} />
      </ul>
      <p>{title}</p>
      <p>{name}</p>
      <p>{region}</p>
      <button>
        <Link to="/namecardlist">받은 명함 보기</Link>
      </button>
    </li>
  );
}

export default HireSummaryCard;

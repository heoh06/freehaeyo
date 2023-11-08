import Tag from './Tag';
import CompanyData from '../../MockData/CompanyData.json';

function HireCard({ employmentData }) {
  const { title, createdAt, stacks, companyId } = employmentData;

  const currentCompanyData = CompanyData.filter(
    (company) => company.id === companyId,
  );
  const { name, region } = currentCompanyData[0];

  return (
    <li>
      <ul>
        <Tag tag={createdAt}></Tag>
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
    </li>
  );
}

export default HireCard;

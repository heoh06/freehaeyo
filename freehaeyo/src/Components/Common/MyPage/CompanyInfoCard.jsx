import Tag from '../Tag';

function CompanyInfoCard({ companyData }) {
  const { intro, stack } = companyData;
  return (
    <div>
      <p>회사소개</p>
      <p>{intro}</p>
      <ul>
        {stack.map((tag, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CompanyInfoCard;

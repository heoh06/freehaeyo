function CompanyCard({ companyData }) {
  const { name, phone, email } = companyData;
  return (
    <div>
      <span>회사 정보</span>
      <span>{name}</span>
      <span>{phone}</span>
      <span>{email}</span>
    </div>
  );
}

export default CompanyCard;

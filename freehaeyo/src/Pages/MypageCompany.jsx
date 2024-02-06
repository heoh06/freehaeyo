import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Common/Header';
import InfoSummaryBox from '../Components/Common/MyPage/InfoSummaryBox';
import InfoBox from '../Components/Common/MyPage/InfoBox';
import CompanyCard from '../Components/Common/CompanyCard';
import CompanyInfoCard from '../Components/Common/MyPage/CompanyInfoCard';

import { getCompanyData } from '../services/api';

function MypageCompany() {
  // Todo:현재 로그인한 companyId값 받아오기
  const companyId = 1;
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    getCompanyData(setCompanyData);
  }, []);

  const currentCompanyData = companyData.filter(
    (company) => company.id === companyId,
  )[0];

  if (companyData.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h3>마이페이지</h3>
        <main>
          <section>
            <CompanyCard companyData={currentCompanyData} />
            <CompanyInfoCard companyData={currentCompanyData} />
            <button>
              <Link to="/changecompanyinfo">회사 정보 수정하기</Link>
            </button>
          </section>
          <section>
            <InfoSummaryBox />
            <InfoBox infoCategory="hiring" />
            <InfoBox infoCategory="pastHire" />
          </section>
        </main>
      </div>
    </>
  );
}

export default MypageCompany;

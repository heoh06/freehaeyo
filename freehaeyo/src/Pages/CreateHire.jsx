import CompanyCard from '../Components/Common/CompanyCard';
import CompanyInfoCard from '../Components/Common/MyPage/CompanyInfoCard';
import Header from '../Components/Common/Header';

import unSelectedCheckBox from '../Assets/unSelectedCheckBox.svg';
import SelectedCheckBox from '../Assets/selectedCheckBox.svg';

import CompanyData from '../MockData/CompanyData.json';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function CreateHire() {
  // Todo: 현재 로그인한 companyId값 받아오기
  const currentCompanyId = 1;
  const currentCompanyData = CompanyData.filter(
    (company) => company.id === currentCompanyId,
  )[0];

  const [hireData, setHireData] = useState({});

  function onChangeData(e) {
    setHireData({
      ...hireData,
      [e.target.name]: e.target.value,
    });
  }

  function onChangeCheckBox(e) {
    if (e.target.checked) {
      setHireData({
        ...hireData,
        [e.target.name]: true,
        dueDate: null,
      });
    } else {
      setHireData({
        ...hireData,
        [e.target.name]: false,
      });
    }
  }

  //Todo: Submit button 클릭 시 hireData를 서버로 보내기

  return (
    <>
      <Header />
      <div>
        <p>채용 올리기</p>
        <main>
          <section>
            <form>
              <div>
                <p>제목</p>
                <span>*</span>
                <p>채용하실 직군을 정확하게 입력해주세요</p>
                <input
                  name="title"
                  type="text"
                  placeholder="제목을 입력해주세요"
                  onChange={onChangeData}
                />
              </div>
              <div>
                <p>내용</p>
                <span>*</span>
                <p>자격 요건, 우대 사항, 기술 스택 등을 입력해주세요</p>
                <input
                  name="content"
                  type="text"
                  placeholder="내용을 상세하게 입력해주세요"
                  onChange={onChangeData}
                />
              </div>
              <div>
                <p>마감일</p>
                <span>*</span>
                <input
                  type="date"
                  name="dueDate"
                  onChange={onChangeData}
                  disabled={hireData.openingAllTime}
                />
                <div>
                  <input
                    id="openingAllTime"
                    type="checkbox"
                    name="openingAllTime"
                    onChange={onChangeCheckBox}
                  />
                  <label htmlFor="openingAllTime">상시 채용</label>
                </div>
              </div>
              <button>채용 올리기</button>
            </form>
          </section>
          <section>
            <CompanyCard companyData={currentCompanyData} />
            <CompanyInfoCard companyData={currentCompanyData} />
            <button>
              <Link to="/changecompanyinfo">회사 정보 수정하기</Link>
            </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default CreateHire;

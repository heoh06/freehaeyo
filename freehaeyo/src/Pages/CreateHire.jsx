/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useState } from 'react';

import CompanyData from '../MockData/CompanyData.json';
import { postHireData } from '../services/api';

import CompanyCard from '../Components/Common/CompanyCard';
import CompanyInfoCard from '../Components/Common/MyPage/CompanyInfoCard';
import Header from '../Components/Common/Header';

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await postHireData(hireData);
    } catch (error) {
      error.message = '구인 등록에 실패하셨습니다. 다시 시도해주세요';
    }
  }

  // Todo: Submit button 클릭 시 hireData를 서버로 보내기

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
                  <label htmlFor="openingAllTime">
                    <input
                      id="openingAllTime"
                      type="checkbox"
                      name="openingAllTime"
                      onChange={onChangeCheckBox}
                    />
                    상시 채용
                  </label>
                </div>
              </div>
              {hireData.title &&
              hireData.content &&
              (hireData.dueDate || hireData.openingAllTime) ? (
                <button type="submit" onClick={handleSubmit}>
                  채용 올리기
                </button>
              ) : (
                <button type="submit" disabled>
                  채용 올리기
                </button>
              )}
            </form>
          </section>
          <section>
            <CompanyCard companyData={currentCompanyData} />
            <CompanyInfoCard companyData={currentCompanyData} />
            <button type="button">
              <Link to="/changecompanyinfo">회사 정보 수정하기</Link>
            </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default CreateHire;

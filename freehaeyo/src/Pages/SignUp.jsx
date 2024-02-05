import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Logo from '../Assets/logo.svg';
import FreelancerForm from '../Components/Signup/FreelancerForm';
import CompanyForm from '../Components/Signup/CompanyForm';
import SelectUser from '../Components/Signup/SelectUser';
import { postUserData } from '../services/api';

function SignUp() {
  const [userType, setUserType] = useState('freelancer');
  const [userInfo, setUserInfo] = useState({});
  const [infoValidation, setInfoValidation] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});
  const [isAgreed, setIsAgreed] = useState(false);

  function handleAgreement() {
    setIsAgreed(!isAgreed);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postUserData(userInfo);
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <p>
        <Link to="/">홈으로</Link>
      </p>
      <div>
        <main>
          <h2>
            <img src={Logo} alt="프리해요" />
          </h2>
          <span>
            회원 가입 유형을 선택 후<br />
            가입 해 주세요
          </span>
          <form>
            <SelectUser setUserType={setUserType} />
            {userType === 'freelancer' ? (
              <FreelancerForm
                setUserInfo={setUserInfo}
                setInfoValidation={setInfoValidation}
              />
            ) : (
              <CompanyForm
                setCompanyInfo={setCompanyInfo}
                setInfoValidation={setInfoValidation}
              />
            )}
            <div>
              <p>
                본 서비스는 학습용 프로젝트로 모든 개인 정보는 서비스 테스트
                외에 타용도로 절대 사용되지 않습니다. 또한, 일정 기간 후 파기
                예정입니다. 개인 정보 기입에 동의하시면 동의 버튼을 눌러주세요.
              </p>
              <label htmlFor="agreement">
                <input
                  id="agreement"
                  type="checkbox"
                  onChange={handleAgreement}
                />
                동의
              </label>
            </div>
            <button type="submit" onClick={handleSubmit}>
              회원가입
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default SignUp;

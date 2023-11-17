import NameCard from '../Components/Common/NameCard';
import InfoBox from '../Components/Common/MyPage/InfoBox';
import InfoSummaryBox from '../Components/Common/MyPage/InfoSummaryBox';

import UserData from '../MockData/UserData.json';

import { Link } from 'react-router-dom';

function MypageFreelancer() {
  // Todo: 나중에 로그인 상태값 받아오면서 유저 id값도 받아오기
  const userId = 1;
  const currentUserData = UserData.filter((user) => user.id === userId)[0];
  const userCareer = currentUserData.resume;

  // Todo: LocalStorage에 저장된 유저 정보 받아오기
  //생각이란걸 해보자.....

  return (
    <>
      <div>
        <h3>마이페이지</h3>
        <main>
          <section>
            <ul>
              <NameCard userData={currentUserData} />
            </ul>
            <div>
              <p>이력</p>
              <ul>
                {userCareer.map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
              <button>
                <Link to="/changeuserinfo">명함·이력 수정하기</Link>
              </button>
            </div>
          </section>
          <section>
            <InfoSummaryBox userType={'freelancer'} />
            <InfoBox infoCategory={'application'} />
            <InfoBox infoCategory={'bookmark'} />
          </section>
        </main>
      </div>
    </>
  );
}

export default MypageFreelancer;

import Header from '../Components/Common/Header';
import NameCard from '../Components/Common/NameCard';
import InfoBox from '../Components/Common/MyPage/InfoBox';
import InfoSummaryBox from '../Components/Common/MyPage/InfoSummaryBox';

import UserData from '../MockData/UserData.json';

import { Link } from 'react-router-dom';
import { getItemLocalStorage } from '../services/localStorage';

function MypageFreelancer() {
  const userId = 1;
  const userDataById = UserData.filter((user) => user.id === userId)[0];
  const userCareer = userDataById.resume;

  const bookmarkedList = getItemLocalStorage('bookmarkedList') || '[]';
  const parsedBookmarkedList = JSON.parse(bookmarkedList);

  return (
    <>
      <Header />
      <div>
        <h3>마이페이지</h3>
        <main>
          <section>
            <ul>
              <NameCard userData={userDataById} />
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
            <InfoSummaryBox
              userType={'freelancer'}
              bookmarkedData={parsedBookmarkedList}
            />
            <InfoBox infoCategory={'application'} applicationData={undefined} />
            <InfoBox
              infoCategory={'bookmark'}
              bookmarkedData={parsedBookmarkedList}
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default MypageFreelancer;

import Alert from '../Assets/alert.svg';

import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import NameCard from '../Components/Common/NameCard';
import Tag from '../Components/Common/Tag';

import UserData from '../MockData/UserData.json';
import HireData from '../MockData/HireData.json';
import CompanyData from '../MockData/CompanyData.json';

import { Link, useParams } from 'react-router-dom';

function HireInfo() {
  // Todo:나중에 로그인 상태관리로 가져오기
  const isLoggined = false;
  // Todo:currentUserId에 현재 유저 ID 넣고 나중에 상태관리로 바꾸기
  const currentUserId = 1;
  const currentUser = UserData.filter((user) => user.id === currentUserId)[0];

  const hireParams = useParams();
  const currentHireData = HireData[hireParams.id];

  const currentCompanyId = currentHireData.companyId;
  const companyData = CompanyData.filter(
    (company) => company.id === currentCompanyId,
  )[0];

  const dueDate = new Date(currentHireData.createdAt).toLocaleDateString(
    'ko-KR',
    {
      dateStyle: 'full',
    },
  );

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <div>
              <h3>{currentHireData.title}</h3>
              <p>{companyData.name}</p>
              <p>{companyData.region}</p>
            </div>
            <div>
              {currentHireData.stacks.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </div>
          </div>
          <div>
            <p>{currentHireData.content}</p>
          </div>
          <div>
            <p>마감일</p>
            <span>{dueDate}</span>
          </div>
          <div>
            <img src={Alert} alt="알림" />
            <div>
              <p>해당 채용에 허위 사실이 있을 경우, 프리해요팀에 알려주세요!</p>
              <span>freehaeyo@gmail.com</span>
            </div>
          </div>
        </section>
        <section>
          {isLoggined ? (
            <form>
              <NameCard userData={currentUser} />
              <div>
                <button>명함넣기</button>
                <button>북마크하기</button>
              </div>
            </form>
          ) : (
            <div>
              <div>
                <p>로그인 필요!</p>
                <span>로그인을 해주세요</span>
              </div>
              <Link to="/login">
                <button>로그인 하기</button>
              </Link>
            </div>
          )}
          <div>
            <p>{companyData.name}</p>
            <span>{companyData.phone}</span>
            <p>{companyData.email}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HireInfo;

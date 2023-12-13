import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import NameCard from '../Components/Common/NameCard';
import Tag from '../Components/Common/Tag';

import Alert from '../Assets/alert.svg';

import UserData from '../MockData/UserData.json';

import { getHireDataById, getCompanyData, getUserData } from '../fakeApi';

import {
  setItemLocalStorage,
  getItemLocalStorage,
} from '../services/localStorage';

function HireInfo() {
  // Todo:나중에 로그인 상태관리로 가져오기
  //   Todo : 로그인 상태 false값으로 바꾸기
  const isLoggined = true;

  const [hireData, setHireData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [userData, setUserData] = useState([]);

  const { id } = useParams();
  const numId = Number(id);

  useEffect(() => {
    getHireDataById(setHireData, numId);
    getCompanyData(setCompanyData);
    getUserData(setUserData);
  }, []);

  // Todo:currentUserId에 현재 유저 ID 넣고 나중에 상태관리로 바꾸기
  const currentUserId = 1;
  const currentUser = userData.filter((user) => user.id === currentUserId)[0];

  const companyDataById = companyData.filter(
    (company) => company.id === hireData.companyId,
  )[0];

  const dueDate = new Date(hireData.createdAt).toLocaleDateString('ko-KR', {
    dateStyle: 'full',
  });

  const bookmarkedList = getItemLocalStorage('bookmarkedList') || '[]';
  function handleBookmark() {
    if (bookmarkedList.length > 0) {
      const newBookmarkedList = bookmarkedList.includes(hireDataById.id)
        ? bookmarkedList.filter((bookmark) => bookmark !== hireDataById.id)
        : [hireDataById.id, ...bookmarkedList];
      setItemLocalStorage('bookmarkedList', newBookmarkedList);
    } else {
      setItemLocalStorage('bookmarkedList', [hireDataById.id]);
    }
  }

  if (
    hireData.length === 0 &&
    companyData.length === 0 &&
    userData.length === 0
  )
    return <div>로딩중...</div>;

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <div>
              <h3>{hireData.title}</h3>
              <p>{companyDataById.name}</p>
              <p>{companyDataById.region}</p>
            </div>
            <div>
              {hireData.stacks.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </div>
          </div>
          <div>
            <p>{hireData.content}</p>
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
                {bookmarkedList.includes(hireData.id) ? (
                  <button onClick={handleBookmark}>북마크 해제하기</button>
                ) : (
                  <button onClick={handleBookmark}>북마크하기</button>
                )}
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
            <p>{companyDataById.name}</p>
            <span>{companyDataById.phone}</span>
            <p>{companyDataById.email}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HireInfo;

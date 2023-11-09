import NameCard from '../Components/Common/NameCard';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';

import Profile from '../Assets/profile.png';

function Developer() {
  return (
    <>
      <Header />
      <main>
        <h3>개발진 소개</h3>
        <section>
          <div>
            <div>
              <img src={Profile} alt="프로필" />
            </div>
            <ul>
              <li>
                <h4>Frontend Developer</h4>
                <span>ex UX/UI Designer</span>
              </li>
              <li>
                <p>오 하은</p>
                <span>Haeun Oh</span>
              </li>
              <li>heoh06@hanmail.net</li>
            </ul>
          </div>
          <ul>
            <li>
              <p>개발 이력</p>
              <ul>
                <li>코드스테이츠 프론트엔드 44기</li>
                <li>프리해요 프로젝트 기획, 디자인, 프론트엔드 개발</li>
              </ul>
            </li>
            <li>
              <p>개발 스택</p>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux/Recoil</li>
              </ul>
            </li>
            <li>
              <p>UI/UX 이력</p>
              <ul>
                <li>째깍악어 ㅣ UI/UX 디자이너 ㅣ 2022.04 ~ 2022.12</li>
                <li>엔토파즈 ㅣ UI/UX 디자이너ㅣ 2021.08 ~ 2022.02</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Developer;

import Logo from '../Assets/logo.svg';
import Search from '../Assets/search.svg';
import CardImg from '../Assets/main_card.png';
import Background from '../Assets/bg1.svg';
import Github from '../Assets/github.svg';
import {Chip} from '@mantine/core';

import NameCard from '../Components/Common/NameCard';
import HireCard from "../Components/Common/HireCard";

function MainPage() {
    return (
        <>
            <header>
                <h1><img src={Logo} alt="프리해요"/></h1>
                <ul>
                    <li>채용</li>
                    <li>개발진</li>
                </ul>
                <ul>
                    <li><img src={Search} alt="검색"/></li>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </header>
            <main>
                <section>
                    <div>
                        <h2>프리랜서 명함을 만들고<p/>회사에 넣어보세요</h2>
                        <ul>
                            <li>#프리랜서</li>
                            <li>#명함</li>
                            <li>#채용</li>
                        </ul>
                    </div>
                    <div>
                        <img src={CardImg} alt="명함" width="200px" height="auto"/>
                    </div>
                </section>
                <section>
                    <img src={Background} width="100px" height="auto"/>
                    <div>
                        <p>프리해요, 누가 만들었을까요?</p>
                        <p>개발진 보러가기</p>
                    </div>
                </section>
                <section>
                    <h3>신규채용</h3>
                    <ul>
                        <HireCard/>
                    </ul>
                </section>
                <section>
                    <h3>금주의 명함</h3>
                    <ul>
                        <NameCard></NameCard>
                    </ul>
                </section>
                <footer>
                    <div>
                        <img src={Logo} alt="프리해요"/>
                        <p>freehaeyo@gmail.com</p>
                        <p>코드스테이츠 44기 과제</p>
                    </div>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>개발진</li>
                    </ul>
                    <div>
                        <img src={Github}/>
                        <p>Github</p>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default MainPage
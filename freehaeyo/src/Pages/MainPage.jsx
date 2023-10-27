import CardImg from '../Assets/main_card.png';
import Background from '../Assets/bg1.svg';

import NameCard from '../Components/Common/NameCard';
import HireCard from "../Components/Common/HireCard";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

function MainPage() {
    return (
        <>
            <Header/>
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
                        <img src={CardImg} alt="명함" width="0px" height="auto"/>
                    </div>
                </section>
                <section>
                    <img src={Background} width="0px" height="auto"/>
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
            </main>
            <Footer/>
        </>
    )
}

export default MainPage
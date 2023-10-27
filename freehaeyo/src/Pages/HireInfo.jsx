import Alert from '../Assets/alert.svg';

import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import NameCard from '../Components/Common/NameCard';

function HireInfo(){
    return(
        <>
            <Header/>
            <main>
                <section>
                    <div>
                        <h3>제목</h3>
                        <p>회사 이름</p>
                        <p>지역</p>
                    </div>
                    <div>
                        <p>채용 내용</p>
                    </div>
                    <div>
                        <p>마감일</p>
                        <span>YYYY.MM.DD</span>
                    </div>
                    <div>
                        <img src={Alert} alt="알림"/>
                        <div>
                            <p>해당 채용에 허위 사실이 있을 경우, 프리해요팀에 알려주세요!</p>
                            <span>freehaeyo@gmail.com</span>
                        </div>
                    </div>
                </section>
                <section>
                    <NameCard/>
                    <div>
                        <button>명함 넣기</button>
                        <button>북마크하기</button>
                    </div>
                    <div>
                        <p>회사이름</p>
                        <span>010 1111 1111</span>
                        <p>e-mail</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default HireInfo;
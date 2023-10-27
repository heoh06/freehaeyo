import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import InfoSummaryBox from '../Components/Common/MyPage/InfoSummaryBox';
import InfoBox from '../Components/Common/MyPage/InfoBox';
import {Link} from 'react-router-dom';

function MypageCompany(){
    return(
        <>
            <Header/>
            <div>
                <h3>마이페이지</h3>
                <main>
                    <section>
                        <div>
                            <p>회사 정보</p>
                            <p>회사 이름</p>
                            <p>000 0000 0000</p>
                            <p>e-mail</p>
                        </div>
                        <div>
                            <p>회사소개</p>
                            <p>회사 소개 내용</p>
                            <ul>
                                <Tag/>
                            </ul>
                        </div>
                        <button><Link to="/changecompanyinfo">회사 정보 수정하기</Link></button>
                    </section>
                    <section>
                        <InfoSummaryBox/>
                        <InfoBox/>
                        <InfoBox/>
                    </section>
                </main>
            </div>
        </>
    )
}

export default MypageCompany;
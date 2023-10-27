import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import InfoSummaryBox from '../Components/Common/MyPage/InfoSummaryBox';
import InfoBox from '../Components/Common/MyPage/InfoBox';
import CompanyCard from '../Components/Common/CompanyCard';
import CompanyInfoCard from '../Components/Common/MyPage/CompanyInfoCard';
import {Link} from 'react-router-dom';

function MypageCompany(){
    return(
        <>
            <Header/>
            <div>
                <h3>마이페이지</h3>
                <main>
                    <section>
                        <CompanyCard/>
                        <CompanyInfoCard/>
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
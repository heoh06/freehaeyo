import NameCard from '../Components/Common/NameCard';
import InfoBox from '../Components/Common/MyPage/InfoBox';
import InfoSummaryBox from '../Components/Common/MyPage/InfoSummaryBox';

import {Link} from 'react-router-dom';

function MypageFreelancer(){
    return(
        <>
            <div>
                <h3>마이페이지</h3>
                <main>
                    <section>
                        <NameCard/>
                        <div>
                            <p>이력</p>
                            <ul>
                                <li>이력</li>
                            </ul>
                            <button><Link to="/changeuserinfo">명함·이력 수정하기</Link></button>
                        </div>
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

export default MypageFreelancer;


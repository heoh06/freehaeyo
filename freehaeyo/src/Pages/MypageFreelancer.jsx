import NameCard from '../Components/Common/NameCard';
import InfoBox from '../Components/Common/MyPage/InfoBox';

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
                            <button>명함·이력 수정하기</button>
                        </div>
                    </section>
                    <section>
                        <div>
                            <p>지원 현황</p>
                            <ul>
                                <li><span>0</span><p>명함넣은 회사</p></li>
                                <li><span>0</span><p>채택한 명함</p></li>
                                <li><span>0</span><p>북마크한 회사</p></li>
                            </ul>
                        </div>
                        <InfoBox/>
                        <InfoBox/>
                    </section>
                </main>
            </div>
        </>
    )
}

export default MypageFreelancer;


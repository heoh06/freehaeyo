import Logo from '../Assets/logo.svg';
import Delete from '../Assets/delete.svg';
import Tag from '../Components/Common/Tag';

function Login(){
    return(
        <>
            <p>홈으로</p>
            <div>
                <main>
                    <h2><img src={Logo} alt="프리해요"/></h2>
                    <span>회원 가입 유형을 선택 후<p></p>가입 해 주세요</span>
                    <form>
                        <ul>
                            <li>🧑‍💻프리랜서</li>
                            <li>🏢 회사 · 의뢰인</li>
                        </ul>
                        <ul>
                            <li>
                                <label htmlFor="e-mail">이메일</label><span>*</span>
                                <input id="e-mail" type="이메일을 입력해주세요" placeholder="이메일"/>
                                <p>error</p>
                            </li>
                            <li>
                                <label>산업군<p>(중복 불가)</p></label>
                                <ul>
                                    <li>
                                        <div>셀렉트박스</div>
                                        <ul>
                                            <li>옵션</li>
                                            <li>옵션</li>
                                            <li>옵션</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>셀렉트박스</div>
                                        <ul>
                                            <li>옵션</li>
                                            <li>옵션</li>
                                            <li>옵션</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <label>마이키워드<p>(최대 2개 선택 가능)</p></label>
                                <ul>
                                    <Tag/>
                                </ul>
                            </li>
                            <li>
                                <label htmlFor="record">이력</label>
                                <input id="record" type="text" placeholder="이력을 입력해주세요"></input>
                                <img src={Delete} alt="삭제"/>
                                <button>+ 이력 추가하기</button>
                            </li>
                        </ul>
                        <div>
                            <input type="checkbox"></input>
                            <span>본 서비스는 학습용 프로젝트로 모든 개인 정보는 서비스 테스트 외에 타용도로 절대 사용되지 않습니다. 또한, 일정 기간 후 파기 예정입니다. 개인 정보 기입에 동의하시면 동의 버튼을 눌러주세요.</span>
                        </div>
                        <button>회원가입</button>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login;
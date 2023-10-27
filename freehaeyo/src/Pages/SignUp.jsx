import Logo from '../Assets/logo.svg';
import FreelancerForm from '../Components/Signup/FreelancerForm';
import CompanyForm from '../Components/Signup/CompanyForm';

function SignUp(){
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
                        <FreelancerForm/>
                        <CompanyForm/>
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

export default SignUp;
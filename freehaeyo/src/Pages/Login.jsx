import Logo from '../Assets/logo.svg';

import SelectUser from '../Components/Signup/SelectUser';
import TextForm from '../Components/Signup/TextForm';

import {Link} from 'react-router-dom';

function Login(){
    return(
        <>
            <p><Link to="/">홈으로</Link></p>
            <div>
                <main>
                    <h2><img src={Logo} alt="프리해요"/></h2>
                    <span>회원 가입 유형을 선택 후<p></p>로그인 해 주세요</span>
                    <form>
                        <SelectUser/>
                        <TextForm/>
                        <TextForm/>
                        <button>로그인</button>
                    </form>
                    <div>
                        <p>아직 회원이 아니신가요?</p>
                        <span><Link to="/signup">회원가입</Link></span>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Login;

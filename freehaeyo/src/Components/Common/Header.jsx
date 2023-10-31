import Logo from '../../Assets/logo.svg';
// Todo : 검색 기능 나중에 구현 예정 import Search from '../../Assets/search.svg';
import Profile from "../../Assets/profile.svg"

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <header>
            <h1><Link to="/"><img src={Logo} alt="프리해요"/></Link></h1>
            <ul>
                <li><Link to="/hire">채용</Link></li>
                <li><Link to="/developer">개발진</Link></li>
            </ul>
            <div>
                <ul>
                    {/* Todo : 검색 기능 추후 구현 예정 <li><img src={Search} alt="검색"/></li> */}
                    {isLoggedIn ? 
                    <li><Link to="/mypage"><img src={Profile} alt="마이페이지"/></Link></li>
                    :<>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/signup">회원가입</Link></li>
                    </>
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header;
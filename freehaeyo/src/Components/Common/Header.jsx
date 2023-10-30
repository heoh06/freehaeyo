import Logo from '../../Assets/logo.svg';
import Search from '../../Assets/search.svg';

import {Link} from 'react-router-dom';

function Header(){
    return(
        <header margin-top="4000px">
            <h1><Link to="/"><img src={Logo} alt="프리해요"/></Link></h1>
            <ul>
                <li><Link to="/hire">채용</Link></li>
                <li><Link to="/developer">개발진</Link></li>
            </ul>
            <ul>
                {/* <li><img src={Search} alt="검색"/></li> */}
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/signup">회원가입</Link></li>
            </ul>
        </header>
    )
}

export default Header;
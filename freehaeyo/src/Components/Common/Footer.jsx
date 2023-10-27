import Logo from '../../Assets/logo.svg';
import Github from '../../Assets/github.svg';

function Footer(){
    return(
        <footer>
            <div>
                <img src={Logo} alt="프리해요"/>
                <p>freehaeyo@gmail.com</p>
                <p>코드스테이츠 44기 과제</p>
            </div>
            <ul>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>개발진</li>
            </ul>
            <div>
                <img src={Github}/>
                <p>Github</p>
            </div>
        </footer>
    )
}

export default Footer;
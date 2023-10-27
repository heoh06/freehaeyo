import Tag from "../Tag";
import {Link} from 'react-router-dom';

function HiringSummaryCard(){
    return(
        <li>
            <ul><Tag/></ul>
            <div>
                <p>채용 제목</p>
                <p>회사 이름</p>
                <p>지역</p>
            </div>
            <button><Link to="/namecardlist">받은 명함 보기</Link></button>
        </li>
    )
}

export default HiringSummaryCard;
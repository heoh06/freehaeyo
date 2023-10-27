import NoContentBox from "./NoContentBox";
import HireSummaryCard from "./HireSummaryCard";
import HiringSummaryCard from "./HiringSummaryCard";

import {Link} from 'react-router-dom';

function InfoBox(){
    return(
        <div>
            <div>
                <p>명함 넣은 회사</p>
                <span>12</span>
            </div>
            <div>
                <p><Link to="/createhire">+ 채용 추가하기</Link></p>
            </div>
            <div>
                <NoContentBox/>
                <ul>
                    <HireSummaryCard/>
                    <HiringSummaryCard/>
                </ul>
                <div/>
            </div>
        </div>
    )
}

export default InfoBox;
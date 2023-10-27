import NoContentBox from "./NoContentBox";
import HireSummaryCard from "./HireSummaryCard";

function InfoBox(){
    return(
        <div>
            <p>명함 넣은 회사</p>
            <span>12</span>
            <div>
                <NoContentBox/>
                <ul>
                    <HireSummaryCard/>
                </ul>
                <div/>
            </div>
        </div>
    )
}

export default InfoBox;
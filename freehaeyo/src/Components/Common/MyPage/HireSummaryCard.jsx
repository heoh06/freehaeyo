import Tag from "../Tag";

function HireSummaryCard(){
    return(
        <li>
            <ul><Tag/></ul>
            <p>채용 제목</p>
            <p>회사 이름</p>
            <p>지역</p>
            <ul>
                <Tag/>
            </ul>
        </li>
    )
}

export default HireSummaryCard;
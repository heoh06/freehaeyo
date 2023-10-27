import Tag from "../Tag";

function HiringSummaryCard(){
    return(
        <li>
            <ul><Tag/></ul>
            <div>
                <p>채용 제목</p>
                <p>회사 이름</p>
                <p>지역</p>
            </div>
            <button>받은 명함 보기</button>
        </li>
    )
}

export default HiringSummaryCard;
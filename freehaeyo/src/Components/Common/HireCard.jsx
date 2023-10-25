import Tag from "./Tag";


function HireCard(){
    return(
        <li>
            <ul>
                <Tag/>
            </ul>
            <div>
                <p>프론트엔드 리액트...</p>
                <p>(주)프리해요 코오퍼레이션</p>
                <p>서울</p>
            </div>
            <ul>
                <Tag/>
                <Tag/>
                <Tag/>
            </ul>
        </li>
    )
}

export default HireCard;
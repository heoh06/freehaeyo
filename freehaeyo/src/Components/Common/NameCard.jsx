import Tag from "./Tag"

function NameCard(){
    return(
        <li>
            <div>
                <p>김땡땡</p>
                <p>010-111-1111</p>
                <p>e-mail</p>
            </div>
            <ul>
                <Tag/>
                <Tag/>
                <Tag/>
            </ul>
        </li>
    )
}

export default NameCard;

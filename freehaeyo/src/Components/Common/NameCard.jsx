import Tag from "./Tag"

function NameCard({userData}){
    const {name, phone, email, stack} = userData;

    return(
        <li>
            <div>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <ul>
                {stack?.map((tag, index)=>{
                    return <Tag key={index} tag={tag}/>
                })}
            </ul>
        </li>
    )
}

export default NameCard;

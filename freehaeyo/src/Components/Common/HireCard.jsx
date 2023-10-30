import Tag from "./Tag";


function HireCard({employmentData}){
    const {title, name, region, stack, createdAt} = employmentData;
    return(
        <li>
            <ul>
                <Tag> 데이터가 렌더링 불가인가?{createdAt && createdAt}</Tag>
            </ul>
            <div>
                <p>{title}</p>
                <p>{name}</p>
                <p>{region}</p>
            </div>
            <ul>
                {stack?.map((tag, index)=>{
                    return <Tag key={index} tag={tag}/>
                })}
            </ul>
        </li>
    )
}

export default HireCard;
import Tag from '../Common/Tag';

function SelectTag(){
    return(
        <li>
            <label>마이키워드<p>(최대 2개 선택 가능)</p></label>
            <ul>
                <Tag/>
            </ul>
        </li>
    )
}

export default SelectTag;
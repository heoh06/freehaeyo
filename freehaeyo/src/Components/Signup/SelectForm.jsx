import SelectBox from "./SelectBox";

function SelectForm(){
    return(
        <li>
            <label>산업군<p>(중복 불가)</p></label>
            <ul><SelectBox/><SelectBox/></ul>
        </li>
    )
}

export default SelectForm;
import TextForm from './TextForm';
import SelectForm from "./SelectForm";
import SelectTag from "./SelectTag"
import Career from "./Career"

function FreelancerForm(){
    return(
        <ul>
            <TextForm/>
            <SelectForm/>
            <SelectTag/>
            <Career/>
        </ul>
    )
}

export default FreelancerForm;
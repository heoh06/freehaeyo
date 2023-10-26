import TextForm from './TextForm';
import SelectTag from "./SelectTag";
import Region from "./Region";

function CompanyForm(){
    return(
        <ul>
            <TextForm/>
            <Region/>
            <SelectTag/>
            <TextForm/>
        </ul>
    )
}

export default CompanyForm;

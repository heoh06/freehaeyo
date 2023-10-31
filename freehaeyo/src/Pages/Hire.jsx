import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import HireCard from '../Components/Common/HireCard';

import HireData from '../MockData/HireData';
import HireTagData from '../MockData/HireTagData';

function Hire(){
    return(
        <>
            <Header/>
            <main>
                <section>
                    <div>
                        <ul>
                            {HireTagData.map((data)=>(<Tag tag={data.stack} key={data.id}/>))}
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <ul>
                            {HireData.map((data)=>(<HireCard employmentData={data} key={data.id}/>))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hire;

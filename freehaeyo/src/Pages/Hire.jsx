import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import HireCard from '../Components/Common/HireCard';

import HireData from '../MockData/HireData';
import HireTagData from '../MockData/HireTagData';

import { useState, useEffect } from 'react';

function Hire(){
    const [hireTagData, setHireTagData] = useState(HireTagData);
    const [isCheckedTag, setIsCheckedTag] = useState(false);
    const [filterTag, setFilterTag] = useState([]);

    const handleTagClick = (id) => {
        setIsCheckedTag(!isCheckedTag);
        hireTagData[id].isChecked = !isCheckedTag;
    }

    useEffect(()=>{
        setFilterTag(HireTagData.filter((data)=>data.isChecked));
    }, [isCheckedTag, HireTagData] )

    return(
        <>
            <Header/>
            <main>
                <section>
                    <div>
                        <ul>
                            {hireTagData.map((data)=>
                                (
                                <Tag 
                                categoryData={data}
                                key={data.id}
                                handleTagClick={handleTagClick}
                                type="selectTag"
                                />
                                )
                            )}
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <ul>
                            {/* Todo:무한스크롤 */}
                            {HireData.map((data)=>(<HireCard employmentData={data} key={data.id}/>))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hire;


import Chef from '../../Chef/Chef';
import { useLoaderData, useParams } from 'react-router-dom';

const Chefs = () => {
    const chefs = useLoaderData()
    // console.log(chefs)

console.log(chefs)
    return (
        <div>
           {
            chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
           } 
        </div>
    );
};

export default Chefs;

import { useEffect, useState } from 'react';
import Chef from '../../Chef/Chef';
import { useLoaderData, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs ] = useState([])
    const [loading, setLoading ] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch(`https://eats-extra-server-rjk-jami.vercel.app/chefs`)
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
        setLoading(false)
    },[])


console.log(chefs)
    return (
        <div>
            
           {loading?       <Spinner animation="border" variant="warning" />:

            chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
           } 
        </div>
    );
};

export default Chefs;
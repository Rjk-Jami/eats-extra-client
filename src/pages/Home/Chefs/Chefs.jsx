import React, { useEffect, useState } from 'react';
import Chef from '../../Chef/Chef';

const Chefs = () => {

    const [chefs ,setChef] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChef(data))
        .catch(error=>console.log(error))
    },[])
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
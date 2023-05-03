import React, { useContext, useEffect, useState } from 'react';
import Chef from '../../Chef/Chef';
import { DataContext } from '../../../provider/DataProvider';

const Chefs = () => {

    const chefs = useContext(DataContext)

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
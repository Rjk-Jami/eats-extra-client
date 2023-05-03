import React, { createContext, useEffect, useState } from 'react';


export const DataContext = createContext(null)
const DataProvider = ({children}) => {

    const [chefs ,setChef] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChef(data))
        .catch(error=>console.log(error))
    },[])

    return (
        <DataContext.Provider value={chefs} >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
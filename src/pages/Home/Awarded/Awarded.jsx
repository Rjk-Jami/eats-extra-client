import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { DataContext } from '../../../provider/DataProvider';
import AwardedChef from './AwardedChef';

const Awarded = () => {
    const chefs = useContext(DataContext)

    const [awardedChef, setAwardedChef] = useState([])

    useEffect(()=>{
        const filteredChef =  chefs.filter(chef=>chef.awarded === true)
        setAwardedChef(filteredChef)
    },[chefs])
    return (
        <Container className='bg-secondary bg-gradient  bg-opacity-10  '>
            <h2>Mastering the Culinary Arts: Celebrating the Talents of an Awarded <span className='fw-bold'>Chef</span> </h2>
       

            
                {
                    awardedChef.map(chef=><AwardedChef key={chef.id} chef={chef}></AwardedChef>)
                }
            
       
       
        </Container>
    );
};

export default Awarded;
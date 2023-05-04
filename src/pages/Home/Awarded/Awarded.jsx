import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import AwardedChef from './AwardedChef';

const Awarded = () => {
    const [chefs, setChef] = useState([])

    // load data from api
    useEffect(() => {
        fetch('https://eats-extra-server-rjk-jami.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])

    const [awardedChef, setAwardedChef] = useState([])

    // filter awarded chefs at every render 
    useEffect(() => {
        const filteredChef = chefs.filter(chef => chef.awarded === true)
        setAwardedChef(filteredChef)
    }, [chefs])
    return (
        <Container className='bg-secondary bg-gradient  bg-opacity-10 py-4 px-5'>
            <h2>Mastering the Culinary Arts: Celebrating the Talents of an Awarded <span className='fw-bold'>Chef</span> </h2>



            {
                awardedChef.map(chef => <AwardedChef key={chef.id} chef={chef}></AwardedChef>)
            }



        </Container>
    );
};

export default Awarded;
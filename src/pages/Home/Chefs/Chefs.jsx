import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Chef from './Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    const [loading, setLoading] = useState(true)
    
    //set loader for loading state
    useEffect(() => {
        setLoading(true)
        fetch(`https://eats-extra-server-rjk-jami.vercel.app/chefs`)
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
        setLoading(false)
    }, [])


    console.log(chefs)
    return (
        <div>

            {loading ? <Spinner animation="border" variant="warning" /> :

                chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
            }
        </div>
    );
};

export default Chefs;
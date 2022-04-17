import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='Services' className='my-5'>
            <h2 className='text-center my-4 fs-1'>Service</h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => 
                            <Service 
                                key={service.id} 
                                service={service}>
                            </Service>
                        )
                    }

                </Row>
                
            </Container>
        </div>
    );
};

export default Services;
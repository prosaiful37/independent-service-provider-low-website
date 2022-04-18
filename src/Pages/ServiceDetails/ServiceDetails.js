import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mb-5'>This is service details: {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-secondary'>Please Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;
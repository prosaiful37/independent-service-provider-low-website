import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/banner11.jpg';
import banner2 from '../../../image/banner/banner22.jpg';
import banner3 from '../../../image/banner/banner33.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 h-80"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className='slider-title'> Creative solutions for legal problems</h1>
                <p style={{color: 'lightBlue', border: '2px solid white'}} className='w-50 mx-auto p-2 fw-5'>Call us 24/7 <span className='text-warning'>1-234-567-8900</span></p>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1 className='slider-title'>Legal solutions for business and individual needs</h1>
                <p style={{color: 'lightBlue', border: '2px solid white'}} className='w-50 mx-auto p-2 fw-5'>Call us 24/7 <span className='text-warning'>1-234-567-8900</span></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h1 className='slider-title'>Do you want justice? We know the way</h1>
                <p style={{color: 'lightBlue', border: '2px solid white'}} className='w-50 mx-auto p-2 fw-5'>Call us 24/7 <span className='text-warning'>1-234-567-8900</span></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


       



    );
};

export default Banner;
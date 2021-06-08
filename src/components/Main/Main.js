import { Carousel } from 'react-bootstrap';
import React from 'react';
import Header from '../Header/Header';
import "./Main.css"
import { useState } from 'react';
import Data from '../../fakeData/fakeData';
import { Link } from 'react-router-dom';
import image1 from '../../Image/Sajek.png';
import image2 from '../../Image/Sreemongol.png';
import image3 from '../../Image/sundorbon.png'

const Main = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    const details = Data.filter(data => data.id === index);
    console.log(details);
    return (
        <div className="main overlay">
            <Header></Header>
            <div className="row">
                <div className="placeDetails">
                    <div className="details">
                      {
                        details.map(data => <>
                        <h1>{data.heading}</h1>
                        <p>{data.detail}</p>
                        <button><Link to = {`/booking/${index}`} style={{color: 'white', textDecoration:'none'}}>Booking</Link></button>
                        </>)
                      }
                    </div>
                </div>
                <div style={{width: '20%'}}>
                  <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image1}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Sajek</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image2}
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Sreemangal</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image3}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Sundarban</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>
    );
};

export default Main;
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './CarouselPage.css'; 

function CarouselPage() {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.testvalley.kr/main-banner/all');
        setCarouselData(response.data);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.pcImageUrl} 
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3> 
              <p>{item.description}</p> 
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ marginBottom: '20px' }}></div> 
    </div>
  );
}

export default CarouselPage;

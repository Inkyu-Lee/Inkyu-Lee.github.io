import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
    return (    
      <div className="container-sm">
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100" height={400}
            src={`${process.env.PUBLIC_URL}/images/japan1.jpeg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>도쿄타워 전망대</h5>
            <p>2023년 2월</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height={400}
            src={`${process.env.PUBLIC_URL}/images/japan2.jpeg`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>도쿄 디즈니랜드</h5>
            <p>2023년 2월</p>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height={400}
            src={`${process.env.PUBLIC_URL}/images/japan3.jpeg`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>도쿄 디즈니랜드 퍼레이드</h5>
            <p>2023년 2월</p>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
};

export default Home;
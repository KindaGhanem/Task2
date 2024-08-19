import React from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Hero() {
  return (
    <Carousel>
    <Carousel.Item>
      <img src='./public/images/banner-01.jpg' alt='image-hero1'></img>
      <Carousel.Caption>
        <h3>Torono <span>Canada</span></h3>
        <p>Hurry Get The Best Villa For You.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src='./public/images/banner-02.jpg' alt='image-hero2'></img>
      <Carousel.Caption>
        <h3>Torono Canada</h3>
        <p>Hurry Get The Best Villa For You.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src='./public/images/banner-03.jpg' alt='image-hero3'></img>
      <Carousel.Caption>
        <h3>Torono Canada</h3>
        <p>Hurry Get The Best Villa For You</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

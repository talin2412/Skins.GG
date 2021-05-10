import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselContainer.css";

function CarouselContainer() {
  return (
    <Carousel fade={true} indicators={true}>
      <Carousel.Item interval={4000}>
        <img
          className="carousel-img-width"
          src="https://cdn.vox-cdn.com/thumbor/Xg_MujgmQBxL_cqJ2zMWGSf_Oh0=/0x0:1919x1038/1200x800/filters:focal(787x171:1093x477)/cdn.vox-cdn.com/uploads/chorus_image/image/67846500/image.6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to SKINS.GG</h3>
          <p>Explore Skins. Watch Spotlights. Have Fun!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000} indicators={true}>
        <img
          className="carousel-img-width"
          src="https://specials-images.forbesimg.com/imageserve/5ff876c60777630771bbe35a/960x0.jpg?fit=scale"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Welcome to SKINS.GG</h3>
          <p>Explore Skins. Watch Spotlights. Have Fun!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img-width"
          src="https://cdn.guidingtech.com/imager/assets/196284/Best-League-of-Legends-Wallpapers-2_4d470f76dc99e18ad75087b1b8410ea9.png?1526290837"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Welcome to SKINS.GG</h3>
          <p>Explore Skins. Watch Spotlights. Have Fun!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;

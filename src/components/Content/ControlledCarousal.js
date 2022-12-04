import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}  indicators={false} interval={5000} >
      <Carousel.Item>
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Nov22/airplay/desk-play.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Nov22/gifr-flipping-banner.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Nov22/15-Nov/transplp1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Nov22/Web-Banner%20(2).gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ maxWidth: "100%", height: "42.0rem" }}
          src="https://static1.lenskart.com/media/desktop/img/Oct22/at/web.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

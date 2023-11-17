import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Landing.css';
import test1 from '../../images/22.png';
import test2 from '../../images/33.png';
import test3 from '../../images/44.png';
import test4 from '../../images/55.png';
import test5 from '../../images/66.png';
import test6 from '../../images/77.png';
import test7 from '../../images/88.png';
import Carousel from 'react-bootstrap/Carousel';

function PartThree() {
  return (
    <Carousel class = "Slide">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={test1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={test2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={test3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={test4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={test5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={test6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={test7}
          alt="First slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default PartThree;

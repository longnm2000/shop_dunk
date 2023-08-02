import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/banner/1.jpg";
import { Container } from "react-bootstrap";
import "./SliderComponent.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slider-directional-btn`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "calc(50% - 25px)",
        right: "42px",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slider-directional-btn`}
      style={{
        ...style,
        display: "block",
        fontSize: "24px",
        position: "absolute",
        top: "calc(50% - 25px)",
        left: "10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container fluid className="p-0">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="w-100" />
        </div>
        <div>
          <img src={img1} alt="" className="w-100" />
        </div>
        <div>
          <img src={img1} alt="" className="w-100" />
        </div>
        <div>
          <img src={img1} alt="" className="w-100" />
        </div>
        <div>
          <img src={img1} alt="" className="w-100" />
        </div>
        <div>
          <img src={img1} alt="" className="w-100" />
        </div>
      </Slider>
    </Container>
  );
}

export default SliderComponent;

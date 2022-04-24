import { CarouselWrapper } from "react-pretty-carousel";

import { SliderImages } from "../../Assets/Images";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel">
      <div className="slider-gallery">
        <CarouselWrapper items={1} showControls={false}>
          {SliderImages.map((image, index) => (
            <img src={image} key={index} alt="Sample Work" />
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Slider;

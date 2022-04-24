import { CarouselWrapper, prev, next } from "react-pretty-carousel";
import { WorkImages } from "../../Assets/Images";

import "./Work.css";

const Work = () => {
  return (
    <section className="work">
      <h2>Our Projects</h2>
      <button
        className="work-prev"
        onClick={() => {
          prev();
        }}
      >
        <i className="fa-solid fa-less-than"></i>
      </button>
      <div className="work-gallery">
        <CarouselWrapper items={1} showControls={false}>
          {WorkImages.map((image, index) => (
            <img src={image} key={index} alt="Projects Gallery" />
          ))}
        </CarouselWrapper>
      </div>
      <button
        className="work-next"
        onClick={() => {
          next();
        }}
      >
        <i className="fa-solid fa-greater-than"></i>
      </button>
    </section>
  );
};

export default Work;

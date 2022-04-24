import { SectionImage } from "../../Assets/Images";

import "./Services.css";

const Services = () => {
  return (
    <main>
      <div className="main-top">
        <div className="main-left">
          <img src={SectionImage} alt="" />
        </div>
        <div className="main-right">
          <h2>Why Should We ?</h2>
          <p>
            Don't hesitate to use our services to draw your building design, We
            are ready to make your dream building come true.
          </p>
        </div>
      </div>
      <div className="main-items">
        <div className="card">
          <i className="fa-solid fa-paint-roller"></i>
          <h3>Exterior & Interior Paints</h3>
          <p>
            We make and design according to the recommended and agreed budget
            from the start.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-couch"></i>
          <h3>Furniture Polish</h3>
          <p>
            If you have wood furniture laying around that needs polishing,
            <br />
            R.K. Paints is your source for professional furniture polishing.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-people-roof"></i>
          <h3>False Celing</h3>
          <p>
            We are involved in offering a wide array of Industrial False Ceiling
            Service for our valued customers.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-person-through-window"></i>

          <h3>Wallpaper</h3>
          <p>
            We’ll help make your home modern and trendy so you can enjoy your
            investment.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Services;

import { Arrow } from "../../Assets/Images";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-intro">
          <div className="header-left">
            <h1>
              We Are Here <br />
              To Make A Dream <br />
              Become Reality
            </h1>
          </div>
          <div className="header-right">
            <h3>
              We Are Experienced Interior Consultants
              <br />
              Who Can Make Your Dreams True
            </h3>
            <div className="header-buttons">
              <button>Contact Now</button>
              <button className="btn-outline">See Works &#8594;</button>
            </div>
            <div className="dotted-arrow">
              <img src={Arrow} alt="dotted arrow" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

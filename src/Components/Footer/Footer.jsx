import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="slogan">
          <h2>Let's Discuss For a Cool Project!</h2>
        </div>

        <div className="mail">
          <a href="mailto:abc@gmail.com?subject=Let's Have a chat&body=Message">
            Consultation Now
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="logo">
          <h3>
            R.K. <br /> Paints
          </h3>
        </div>
        <div className="address">
          <div className="visit">
            <h2>
              Visit
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </h2>
            <span>
              822 - Block A, Sector - 6 <br />
              Eco City - 1 <br />
              New Chandigarh
            </span>
          </div>

          <div className="call">
            <h2>
              Call
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </h2>
            <span>+91 9082 342 143</span>
          </div>
        </div>

        <div className="connect">
          <h3>Stay Connected</h3>
          <div className="socials">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&#169; R.K. Paints | All Rights Reserverd</p>
      </div>
    </footer>
  );
};

export default Footer;

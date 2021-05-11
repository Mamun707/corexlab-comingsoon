import React from "react";

import "../components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-details">
          <div className="ft-social">
            <ul className="social-icons">
              <li>
                <a
                  className="youtube"
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="youtube.svg" />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/MdMamunHowlade6"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="twitter.svg" />
                </a>
              </li>

              <li>
                <a
                  className="dribbble"
                  href="https://www.instagram.com/iammamunhowlader/?hl=en"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="instagram.svg" />
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/mamun.hawlader.90"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="facebook.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

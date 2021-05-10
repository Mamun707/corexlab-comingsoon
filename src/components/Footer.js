import React from "react";
import { BiPhoneCall, BiMap } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

import "../components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-details">
          <div className="ft-contact">
            <div className="ft-contact-title">
              <p>Contact Us</p>
            </div>
            <div className="contact-details">
              <div className="contact-image">
                <i>
                  <BiPhoneCall />
                </i>
              </div>
              <div className="contact-info">
                <p>01307524982</p>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-image">
                <i>
                  <HiOutlineMail />
                </i>
              </div>
              <div className="contact-info">
                <p>reach@corexlab.com</p>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-image">
                <i>
                  <BiMap />
                </i>
              </div>
              <div className="contact-info">
                <p>330/4/7, East Nakhalpara, Tejgaon, Dhaka-1215 </p>
              </div>
            </div>
          </div>
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

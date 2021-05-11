import React, { useState } from "react";
import "../components/PageOne.css";

function PageOne() {
  const [email, setEmail] = useState("");
  const handleSubscibe = (e) => {
    e.preventDefault();
    alert("succesfully subscribe");
    setEmail("");
  };
  return (
    <div className="page1">
      <div className="container">
        <div className="page1-details">
          <div className="page1-intro">
            <div className="page1-title">
              <p>Coming Soon</p>
            </div>
            <div className="page1-decription">
              <p>Get Notified </p>
              <p>When we Launch</p>
            </div>
            <div className="page1-notify">
              <form onSubmit={handleSubscibe}>
                <div className="subscribe-form">
                  <div className="subscribe-form-email">
                    {" "}
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter email here"
                      className="outline"
                    />
                  </div>
                  <div className="subscribe-form-submit">
                    {" "}
                    <input
                      type="submit"
                      value="Notify Me"
                      className="outline"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="ft-contact">
              <div className="contact-details">
                <div className="contact-image">
                  <img src="footer_map.svg" alt="phone" />
                </div>
                <div className="contact-info">
                  <p>Address</p>

                  <p> 330/4/7, East Nakhalpara, Tejgaon, Dhaka-1215</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="contact-image">
                  <img src="footer_email.svg" alt="phone" />
                </div>
                <div className="contact-info">
                  <p>Email</p>
                  <p>reach@corexlab.com</p>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-image">
                  <img src="footer_phone.svg" alt="phone" />
                </div>
                <div className="contact-info">
                  <p>Phone</p>
                  <p>01307524982</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page1-image">
            <img src="page1_image.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOne;

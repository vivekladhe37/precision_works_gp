import React, { useEffect, useState } from "react";
import "../Styles/Industries.css";
import industry1 from "../Images/industry1.jpg";
import industry2 from "../Images/industry2.jpg";
import industry3 from "../Images/industry3.jpg";
import industry4 from "../Images/industry4.jpg";
import industry5 from "../Images/industry5.jpg";
import industry6 from "../Images/industry6.jpg";

function Industries() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`industries ${loaded ? "loaded" : ""}`}>
      <div className="industries-container-first">
        <div className="industries-container-item">
          <img src={industry1} alt="first-industry"></img>
          <div className="industries-container-text">
            <h1>Valve and Pump Manufacturer</h1>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={industry2} alt="second-industry"></img>
          <div className="industries-container-text">
            <h1>Wire and Cable Extrusion</h1>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={industry3} alt="third-industry"></img>
          <div className="industries-container-text">
            <h1>Oil and Gas Industries</h1>
          </div>
        </div>
      </div>
      <div className="industries-container-second">
        <div className="industries-container-item">
          <img src={industry4} alt="fourth-industry"></img>
          <div className="industries-container-text">
            <h1>Agricultural Equipment Manufacturer</h1>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={industry5} alt="fifth-industry"></img>
          <div className="industries-container-text">
            <h1>Heavy Machinery Components</h1>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={industry6} alt="sixth-industry"></img>
          <div className="industries-container-text">
            <h1>Automotive Components Manufacturer</h1>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <h1>GET IN TOUCH</h1>
        <div className="get-in-touch">
          <div className="address-sec">
            <h1>CONTACT INFO</h1>
            <p>
              <strong>Windsor Precision Works</strong>
              <br></br>6240 Hawthorne Drive
              <br></br>Windsor, ON N8T 1J9
              <br></br>Canada
              <br></br>
              <br></br>519-721-4143
              <br></br>
              <a href="mailTo:info@precisionworks.ca">info@precisionworks.ca</a>
            </p>
          </div>
          <div className="container-map">
            <h1>LOCATE US</h1>
            <iframe
              title="Google Maps Locator"
              height="300cm"
              width="100%"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6240%20Hawthorne%20Drive+(Windsor%20Precision%20Works)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;

import React, { useEffect, useState } from "react";
import "../Styles/Services.css";
import cncmilling from "../Images/cnc-milling.jpeg";
import cncturning from "../Images/cnc-turning.jpeg";
import manualturning from "../Images/manual-turning.jpeg";
import materialexpertise from "../Images/material-expertise.jpeg";
import prototypemachining from "../Images/prototype-machining.jpeg";
import largesmallbatch from "../Images/large-small-batch.jpeg";

function Services() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`industries ${loaded ? "loaded" : ""}`}>
      <div className="industries-container-first">
        <div className="industries-container-item">
          <img src={cncturning} alt="first-industry"></img>
          <div className="industries-container-text">
            <h1>CNC TURNING</h1>
            <ul>
              <li>
                <strong>
                  High-precision CNC turning for cylindrical components.
                </strong>
              </li>
              <li>
                <strong>Multi-axis turning for intricate geometries.</strong>
              </li>
              <li>
                <strong>Broaching capabilities</strong>
              </li>
              <li>
                <strong>4.5" Bore diameter</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={cncmilling} alt="second-industry"></img>
          <div className="industries-container-text">
            <h1>CNC MILLING</h1>
            <ul>
              <li>
                <strong>
                  Utilizing cutting-edge CNC technology for precise and complex
                  machining tasks.
                </strong>
              </li>
              <li>
                <strong>
                  Multi-axis milling capabilities for intricate and
                  high-tolerance components.
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={manualturning} alt="third-industry"></img>
          <div className="industries-container-text">
            <h1>MANUAL TURNING</h1>
            <ul>
              <li>
                <strong>
                  Skilled operators for traditional turning processes.
                </strong>
              </li>
              <li>
                <strong>
                  Ideal for custom or low-volume turning projects or repairs
                </strong>
              </li>
              <li>
                <strong>6" Bore Diameter</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="industries-container-second">
        <div className="industries-container-item">
          <img src={prototypemachining} alt="fourth-industry"></img>
          <div className="industries-container-text">
            <h1>PROTOTYPE MACHINING</h1>
            <ul>
              <li>
                <strong>
                  Specialized in prototyping to bring design concepts to life
                  quickly.
                </strong>
              </li>
              <li>
                <strong>
                  Iterative milling processes for refining and optimizing
                  prototypes.
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={largesmallbatch} alt="fifth-industry"></img>
          <div className="industries-container-text">
            <h1>LARGE & SMALL BATCH PRODUCTION</h1>
            <ul>
              <li>
                <strong>
                  Handle both large-scale production runs and small-batch
                  orders.
                </strong>
              </li>
              <li>
                <strong>
                  Efficient setup and machining processes for cost-effective
                  production.
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="industries-container-item">
          <img src={materialexpertise} alt="sixth-industry"></img>
          <div className="industries-container-text">
            <h1>MATERIAL EXPERTISE</h1>
            <ul>
              <li>
                <strong>
                  Proficient in milling a variety of materials, including
                  aluminum, steel, titanium, and exotic alloys.
                </strong>
              </li>
              <li>
                <strong>
                  Customized tooling solutions for different material
                  requirements.
                </strong>
              </li>
            </ul>
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

export default Services;

// Home.js

import React from "react";
import "../Styles/Home.css";
import aboutUsImage from "../Images/about_us.jpg";
import cncvideo from "../Videos/cnc-intro-video.mp4";

function Home() {
  return (
    <div className="home-container">
      {/* Video Section */}
      <video className="cnc-intro-video" autoPlay muted loop>
        <source src={cncvideo} type="video/mp4" />
      </video>
      <h2>CNC MACHINE WALKTHROUGH</h2>
      <div className="about-us">
        <h2>ABOUT US</h2>
        <div className="about-us-flexcontainer">
          <img src={aboutUsImage} alt="About Us" className="about-us-pic" />
          <div className="about-us-text">
            <p>
              Windsor Precision Works Inc. is on-demand CNC machining for rapid
              prototyping and production parts, through a network of
              specialized, experienced, and thoroughly vetted local and global
              CNC machine shops. We advanced with a straightforward thought of
              serving clients with the best items at competitive cost. With over
              2 decades of aggregate involvement in accurate machining and
              casting, we have the capability to meet all the client’s needs. We
              have been a one halt arrangement for our regarded customers’
              fabricating prerequisites. Our column for victory lies in our
              continuous lock in in learning and actualizing more up to date
              innovation for consistent optimization of our items. We have been
              serving Oil & Gas Hardware, Cable, Pumps, Structural and various
              engineering industries. We have nurtured positive relations with
              all the clients through the business ethics we have worked with to
              become their prime choice for satisfying engineering needs. With
              extensive experience working with Steel and non-ferrous materials,
              we specialize in steel machining and prototyping, as well as
              aluminum prototyping and machining.
            </p>
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

export default Home;

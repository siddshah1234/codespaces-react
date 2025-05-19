import React from 'react';
import Navbar from './Navbar';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />

      {/* About Section */}
      <section className="about-section">
        <h1>About MorrisCode</h1>
        <p>
          MorrisCode was founded in August of 2024 by a student at the Morris County School of Technology named <strong>Siddhant Shah</strong>. 
          The program was started with a simple goal: <em>make programming accessible to everyone in Morris County.</em>
        </p>
        <br />
        <p>
          The name <strong>“MorrisCode”</strong> is a nod to Morse Code, a revolutionary communication system. Just as Morse Code transformed communication, 
          we aim to transform the way people learn and interact with technology. Our mission is to inspire the next generation of computer programmers by 
          providing high-quality coding workshops and resources.
        </p>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          Over the past year, we have hosted numerous educational workshops about programming in <strong>Java, Python, Web Design, and Cybersecurity</strong>. 
          These workshops have helped students and aspiring coders gain valuable skills and confidence in the field of technology.
        </p>
        <p>
          In the future, we hope to expand our impact by hosting more workshops in libraries and schools, and holding <strong>fundraisers</strong> to 
          provide technology for underprivileged children.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;

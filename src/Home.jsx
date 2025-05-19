import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

function Home() {
  const [currentWorkshop, setCurrentWorkshop] = useState(0);

  const workshops = [
    {
      date: "August 14, 2024",
      title: "Intro to Java",
      description: "We held an introductory workshop on Java programming. It was a great session for beginners!",
      link: "https://example.com/java-workshop",
    },
    {
      date: "August 15, 2024",
      title: "Intro to Python",
      description: "Our Python workshop was a hit! Participants learned the basics of one of the most popular programming languages.",
      link: "https://example.com/python-workshop",
    },
    {
      date: "August 21, 2024",
      title: "Intro to Web Design (Part 1)",
      description: "The first part of our web design series was a success. Attendees discovered the fundamentals of web design.",
      link: "https://example.com/web-design-pt1",
    },
    {
      date: "August 22, 2024",
      title: "Intro to Web Design (Part 2)",
      description: "The second part of our web design series continued with advanced concepts and hands-on practice.",
      link: "https://example.com/web-design-pt2",
    },
    {
      date: "December 3, 2024",
      title: "Intro to Python",
      description: "We hosted another Python workshop, giving more people the chance to dive into programming.",
      link: "https://example.com/python-workshop-2",
    },
    {
      date: "December 10, 2024",
      title: "Intro to Scratch",
      description: "Our Scratch workshop was perfect for young learners. They had fun creating their first projects!",
      link: "https://example.com/scratch-workshop",
    },
    {
      date: "December 17, 2024",
      title: "Intro to Cybersecurity",
      description: "The cybersecurity workshop was a great opportunity to learn about protecting digital systems.",
      link: "https://example.com/cybersecurity-workshop",
    },
  ];

  const handleNext = () => {
    setCurrentWorkshop((prev) => (prev + 1) % workshops.length);
  };

  const handlePrev = () => {
    setCurrentWorkshop((prev) => (prev - 1 + workshops.length) % workshops.length);
  };

  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>MorrisCode: Inspiring The Future</h1>
          <p>Empowering the next generation of coders and innovators.</p>
          <a href="/about"><button className="learn-more-btn">Learn More</button></a>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/Zpz62mMD/Screenshot-2025-02-15-210651.png" alt="Inspiring the Future" />
        </div>
      </section>

      {/* Workshops Section */}
      <section className="workshops-section">
        <h2>Past Workshops - Parsippany Library</h2>
        <div className="workshop-gallery">
          <button className="nav-button prev-button" onClick={handlePrev}>&lt;</button>
          <div className="workshop-card">
            <h3>{workshops[currentWorkshop].date} - {workshops[currentWorkshop].title}</h3>
            <p>{workshops[currentWorkshop].description}</p>
            <a href={workshops[currentWorkshop].link} target="_blank" rel="noopener noreferrer">
              <button className="workshop-link-btn">View Lesson</button>
            </a>
          </div>
          <button className="nav-button next-button" onClick={handleNext}>&gt;</button>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="contribute-section">
        <h2>Contribute to Our Mission</h2>
        <div className="contribute-options">
          <div className="contribute-item">
            <h3>Donate</h3>
            <p>Your donation helps us provide free coding workshops and resources to the community.</p>
            <button className="donate-btn">Donate Now</button>
          </div>
          <div className="contribute-item">
            <h3>Volunteer</h3>
            <p>Become a MorrisCode volunteer and help inspire the next generation of coders.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7SvasqpmL1PLmKOo-ccKsAnb4W-dybqMXs6V4ch0D4joI5Q/viewform" target="_blank" rel="noopener noreferrer">
              <button className="volunteer-btn">Join Us</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

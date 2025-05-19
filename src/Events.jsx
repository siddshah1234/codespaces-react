import React from 'react';
import Navbar from './Navbar';
import './Events.css';

function Events() {
  return (
    <div className="events-page">
      <Navbar />

      {/* Events Section */}
      <section className="events-section">
        <div className="events-box">
          <h1>New Events Coming Soon!</h1>
        </div>
      </section>
    </div>
  );
}

export default Events;

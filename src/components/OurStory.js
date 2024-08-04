import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="our-story-container">
      <h1>Our Story</h1>
      <p className="story-description">
        Inspired from their travels through the Indian subcontinent, the team at Footloose Journeys has brought to life The Mahua Store - a curated collection of travel & nature themed merchandise.
      </p>
      <p className="story-description">
        Products here find their origins in ethereal forests, mighty mountains, vibrant cultures, and depict the very soul of an avid explorer. We are a brand that connects rustic experiences with modern trends. Just like the ever-giving <i>Mahua</i> Tree, you will find everything that you are looking for here, at The Mahua Store!
      </p>
      <h1 className='real_deal_heading'>Here’s why you can trust we’re the real deal.</h1>
      <div className="features-container">
        <div className="feature-item">
          <h3>Thoughtful Designs</h3>
          <p>To express the love for nature and travel.</p>
        </div>
        <div className="feature-item">
          <h3>Best Quality Material</h3>
          <p>So that our products are comfortable and long lasting.</p>
        </div>
        <div className="feature-item">
          <h3>Always Helpful</h3>
          <p>To answer your queries and resolve difficulties.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

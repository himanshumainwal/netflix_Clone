import React from 'react';
import feature1 from '../assets/feacher_1.png';
import feature2 from '../assets/feature_2.png';
import feature3 from '../assets/feacher_3.png';
import feature4 from '../assets/faecher_4.png';
import video_1 from '../assets/video_1.mp4';
import video_2 from '../assets/video_3.mp4';


const featuresData = [
  {
    heading: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image: feature1,
    video: video_1,
    reverse: false,
  },
  {
    heading: 'Download your shows to watch offline',
    description: 'Save your favourites easily and always have something to watch.',
    image: feature2,
    video: null,
    reverse: true,
  },
  {
    heading: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    image: feature3,
    video: video_2,
    reverse: false,
  },
  {
    heading: 'Create profiles for kids',
    description: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
    image: feature4,
    video: null,
    reverse: true,
  },
];

// Create a Feature component to represent each section
const Feature = ({ heading, description, image, video, reverse }) => {
  return (
    <section className={`feachers ${reverse ? 'feachers-2' : ''}`}>
      <div className="desc">
        <h1 className="heading">{heading}</h1>
        <h2>{description}</h2>
      </div>

      <div className="feacher-Img">
        <img src={image} alt={heading} />
        {video && <video src={video} className={video === video_2 ? 'third' : ''} autoPlay loop muted></video>}
      </div>
    </section>
  );
};

// Main Features component that renders all features
const Features = () => {
  return (
    <div>
      {featuresData.map((feature, index) => (
        <React.Fragment key={index}>
          <Feature {...feature} />
          <div className="separation"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Features;


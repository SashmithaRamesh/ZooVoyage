import React from 'react';
import './ZooEvents.css';

const events = [
  {
    title: 'Lion Feeding Show',
    description: 'Watch the lions being fed by our experienced zookeepers.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5HZ4RzzucHbP-hwaSFEUyTVqpyvrXZyjVA&s', // Replace with a Google image link
    videoUrl: 'https://www.youtube.com/embed/wZIfU_J45Fc?si=BMVQuzhSOAcdQEHd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin'
  },
  {
    title: 'Elephant Parade',
    description: 'Enjoy the majestic parade of elephants in the zoo.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0ArL6nRIQ0UCuEmG2pnBZUS9HmxNsRuOZA&s', // Replace with a Google image link
    videoUrl: 'https://www.youtube.com/embed/weDPR50YHVM?si=JcM2Pbnxsbu_EnQD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin'
  },
  {
    title: 'Birds of Prey Show ',
    description: 'Experience the thrilling flight of our birds of prey.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoDfG0oJH_Nm52xcophz6C0-86rR3a5dTdg&s', // Replace with a Google image link
    videoUrl: 'https://www.youtube.com/embed/fnkV3S3aOio?si=SsYVQtrmik5pG9za" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin'
  }
];

const ZooEvents = () => {
  return (
    <div className="events-page">
      <h2 className="page-title">RECENT EVENTS</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <div className="event-media">
              <img src={event.imageUrl} alt={event.title} className="event-image" />
              <iframe
                src={event.videoUrl}
                title={event.title}
                className="event-video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZooEvents;
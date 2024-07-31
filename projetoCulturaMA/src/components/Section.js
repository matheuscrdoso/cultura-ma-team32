import React from 'react';

const Section = ({ id, title, children, videoUrl }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
      {videoUrl && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Section;

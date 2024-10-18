import React from 'react';
import Experience from './Experience';  
import '../index.css';  

export default function Experiences() {
  const experiences = [
    'Figma UI for customer X',
    'Website for customer Y',
    // 'Other experience...'  // Tom liste for testing
  ];

  return (
    <div className="experiences-container">
      <h2 className="experiences-title">Experiences</h2> {/* Legger til tittel for erfaringer */}
      {experiences.length === 0 ? (
        <p className="no-experiences">Ingen erfaringer</p>  
      ) : (
        experiences.map((experience, index) => (
          <Experience key={index}>
            <div className="experience-card">
              {experience}
            </div>
          </Experience>
        ))
      )}
    </div>
  );
}

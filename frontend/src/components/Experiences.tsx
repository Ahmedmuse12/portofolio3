import React from 'react';
import Experience from './Experience';  // Importer Experience-komponenten
import '../index.css';  // Ny CSS-fil for erfaringer

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
        <p className="no-experiences">Ingen erfaringer</p>  // Viser meldingen hvis listen er tom
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

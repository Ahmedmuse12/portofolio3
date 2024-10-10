import React from 'react';
import Experience from './Experience';  // Importer Experience-komponenten

export default function Experiences() {
  const experiences = [
    'Figma UI for customer X',
    'Website for customer Y',
    // 'Other experience...'  // Tom liste for testing
  ];

  return (
    <div>
      {experiences.length === 0 ? (
        <p>Ingen erfaringer</p>  // Viser meldingen hvis listen er tom
      ) : (
        experiences.map((experience, index) => (
          <Experience key={index}>{experience}</Experience>  // Bruk map for å iterere over erfaringene
        ))
      )}
    </div>
  );
}

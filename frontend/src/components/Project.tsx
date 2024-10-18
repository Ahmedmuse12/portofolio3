import React from 'react';
import './app.css';  // For å bruke CSS-styling

interface ProjectProps {
  children: React.ReactNode;
}

export default function Project({ children }: ProjectProps) {
  return (
    <div className="project-container">
      {children}
    </div>
  );
}

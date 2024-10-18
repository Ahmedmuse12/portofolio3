import React from 'react';
import './app.css';
interface ExperienceProps {
  children: React.ReactNode;
}

export default function Experience({ children }: ExperienceProps) {
  return <p>{children}</p>;
}

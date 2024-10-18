import React from 'react';
import '../index.css';

interface HeaderProps {
  student: string;
  degree: string;
  points: number;
}

export function Header({ student, degree, points }: HeaderProps) {
  return (
    <div className="header-container">
      <h1>{student}</h1>
      <p>Degree: {degree}</p>
      <p className="header-points">Points: {points}</p>
    </div>
  );
}

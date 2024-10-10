// src/components/Header.tsx

import React from 'react';

interface HeaderProps {
  student: string;
  degree: string;
  points: number;
}

export function Header({ student, degree, points }: HeaderProps) {
  return (
    <div>
      <h1>{student}</h1>
      <p>Degree: {degree}</p>
      <p>Points: {points}</p>
    </div>
  );
}

import React from 'react';

interface ExperienceProps {
  children: React.ReactNode;
}

export default function Experience({ children }: ExperienceProps) {
  return <p>{children}</p>;
}

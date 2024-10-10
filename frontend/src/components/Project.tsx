import React from 'react';

interface ProjectProps {
  children: React.ReactNode;
}

export default function Project({ children }: ProjectProps) {
  return <div>{children}</div>;
}

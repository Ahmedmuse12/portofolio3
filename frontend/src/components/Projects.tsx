import React from 'react';
import Project from './Project';  // Importer Project-komponenten

interface ProjectsProps {
  projects: { name: string, category: string }[];  // Prosjektene har navn og kategori
}

export default function Projects({ projects }: ProjectsProps) {
  // Opprett et objekt for å telle prosjekter per kategori
  const projectCounts: { [key: string]: number } = {};

  projects.forEach((project) => {
    if (projectCounts[project.category]) {
      projectCounts[project.category] += 1;
    } else {
      projectCounts[project.category] = 1;
    }
  });

  return (
    <div>
      {projects.length === 0 ? (
        <p>Ingen prosjekter</p>  // Viser meldingen hvis listen er tom
      ) : (
        <>
          {projects.map((project, index) => (
            <Project key={index}>{project.name}</Project>  // Viser prosjektets navn
          ))}

          <h3>Total per kategori:</h3>
          <ul>
            {Object.keys(projectCounts).map((category) => (
              <li key={category}>
                {category}: {projectCounts[category]} prosjekter  {/* Vis kategori og antall prosjekter */}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

import React from 'react';
import Project from './Project';
import '../index.css';

// Definerer typen for prosjektene
interface ProjectType {
  name: string;
  category: string;
}

interface ProjectsProps {
  projects: ProjectType[];  // Prosjekter er en array av ProjectType
}

export default function Projects({ projects }: ProjectsProps) {
  const projectCounts: { [key: string]: number } = {};

  projects.forEach((project) => {
    if (projectCounts[project.category]) {
      projectCounts[project.category] += 1;
    } else {
      projectCounts[project.category] = 1;
    }
  });

  return (
    <div className="container">
      <div className="projects-list">
        {projects.length === 0 ? (
          <p>Ingen prosjekter</p>
        ) : (
          <>
            {projects.map((project, index) => (
              <Project key={index}>
                <div className={`project-item ${project.category.toLowerCase()}`}>
                  <h3>{project.name}</h3>
                  <p>Kategori: {project.category}</p>
                </div>
              </Project>
            ))}

            <h3>Total per kategori:</h3>
            <ul>
              {Object.keys(projectCounts).map((category) => (
                <li key={category}>
                  {category}: {projectCounts[category]} prosjekter
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

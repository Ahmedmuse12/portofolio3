import React from 'react';
import Project from './Project';
import '../index.css';

interface DemoType {
  title: string;
  link: string;
}

interface FileType {
  fileName: string;
  fileLink: string;
}

interface AuthorType {
  name: string;
  profileLink: string;
}

interface ProjectType {
  name: string;
  category: string;
  publishedDate: string;
  public: boolean;
  demos?: DemoType[];
  files?: FileType[];
  author?: AuthorType;
}

interface ProjectsProps {
  projects: ProjectType[];
}

// Funksjon for å hente verdien av en cookie
const getCookieValue = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

export default function Projects({ projects }: ProjectsProps) {
  const userRole = getCookieValue('role'); // Henter brukerens rolle fra cookies

  // Filtrer prosjektene basert på brukerens rolle
  const filteredProjects = projects.filter((project) => {
    if (userRole === 'admin') {
      return true; // Admin kan se alle prosjekter
    } else {
      return project.public; // Vanlige brukere ser kun public prosjekter
    }
  });

  const projectCounts: { [key: string]: number } = {};

  filteredProjects.forEach((project) => {
    if (projectCounts[project.category]) {
      projectCounts[project.category] += 1;
    } else {
      projectCounts[project.category] = 1;
    }
  });

  return (
    <div className="container">
      <div className="projects-list">
        {filteredProjects.length === 0 ? (
          <p>Ingen prosjekter</p>
        ) : (
          <>
            {filteredProjects.map((project, index) => (
              <Project key={index}>
                <div className={`project-item ${project.category.toLowerCase()}`}>
                  <h3>{project.name}</h3>
                  <p>Kategori: {project.category}</p>
                  <p>Publisert: {project.publishedDate || 'Ikke angitt'}</p>                
                  <p>Offentlig: {project.public ? 'Ja' : 'Nei'}</p>

                  {/* Vis demoer */}
                  {project.demos && project.demos.length > 0 && (
                    <div>
                      <h4>Demoer:</h4>
                      <ul>
                        {project.demos.map((demo, demoIndex) => (
                          <li key={demoIndex}>
                            <a href={demo.link} target="_blank" rel="noopener noreferrer">{demo.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Vis filer */}
                  {project.files && project.files.length > 0 && (
                    <div>
                      <h4>Filer:</h4>
                      <ul>
                        {project.files.map((file, fileIndex) => (
                          <li key={fileIndex}>
                            <a href={file.fileLink} target="_blank" rel="noopener noreferrer">{file.fileName}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Vis forfatter */}
                  {project.author && (
                    <p>Forfatter: <a href={project.author.profileLink} target="_blank" rel="noopener noreferrer">{project.author.name}</a></p>
                  )}
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

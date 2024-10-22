import React, { useState } from 'react';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import CreateProject from './components/CreateProject';
import './index.css';

function App() {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'ahmedms@hiof.no';

  // Oppdatert state for prosjekter som nå inkluderer demoer, filer og forfatter
  const [projects, setProjects] = useState([
    {
      name: 'Building a React app',
      category: 'Development',
      publishedDate: '2023-09-01',
      public: true,
      demos: [{ title: 'Demo 1', link: 'https://example.com/demo1' }],
      files: [{ fileName: 'Spec.pdf', fileLink: 'https://example.com/spec.pdf' }],
      author: { name: 'Halgeir Geirson', profileLink: 'https://example.com/halgeir' },
    },
    {
      name: 'Designing a website',
      category: 'Design',
      publishedDate: '2023-09-02',
      public: true,
      demos: [{ title: 'Demo 2', link: 'https://example.com/demo2' }],
      files: [{ fileName: 'Design Guide.pdf', fileLink: 'https://example.com/design-guide.pdf' }],
      author: { name: 'Halgeir Geirson', profileLink: 'https://example.com/halgeir' },
    },
  ]);

  // Funksjon for å legge til et nytt prosjekt som inkluderer demoer, filer og forfatter
  const addProject = (
    name: string,
    category: string,
    publishedDate: string,
    demos: { title: string; link: string }[],
    files: { fileName: string; fileLink: string }[],
    author: { name: string; profileLink: string }
  ) => {
    const newProject = { name, category, publishedDate, public: true, demos, files, author };
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Projects projects={projects} />  {/* Sender prosjektene som prop til Projects */}
      <CreateProject addProject={addProject} />  {/* Sender addProject-funksjonen som prop */}
      <Contact email={email} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import CreateProject from './components/CreateProject';

function App() {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'ahmedms@hiof.no';

  const [projects, setProjects] = useState([
    { name: 'Building a React app', category: 'Development' },
    { name: 'Designing a website', category: 'Design' },
    { name: 'Implementing an API', category: 'Development' },
    { name: 'Database Management', category: 'Database' }
  ]);  // State for prosjekter

  // Funksjon for å legge til et nytt prosjekt
  const addProject = (newProject: string, category: string) => {
    setProjects([...projects, { name: newProject, category }]);  // Legger til det nye prosjektet
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

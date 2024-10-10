import React, { useState } from 'react';

interface CreateProjectProps {
  addProject: (project: string, category: string) => void;  
}

export default function CreateProject({ addProject }: CreateProjectProps) {
  const [projectName, setProjectName] = useState('');
  const [category, setCategory] = useState('Development'); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (projectName.trim()) {
      addProject(projectName, category);  
      setProjectName('');  // Tilbakestiller  inputfeltet
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Nytt prosjekt:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}  // Oppdater state når brukeren skriver
          placeholder="Skriv prosjektnavn"
        />
      </div>
      <div>
        <label htmlFor="category">Kategori:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}  
        >
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Database">Database</option>
          <option value="Testing">Testing</option>
        </select>
      </div>
      <button type="submit">Legg til prosjekt</button>
    </form>
  );
}

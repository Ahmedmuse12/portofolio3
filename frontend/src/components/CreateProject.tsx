import React, { useState } from 'react';
import '../index.css';

interface CreateProjectProps {
  addProject: (
    projectName: string,
    category: string,
    publishedDate: string,
    demos: { title: string; link: string }[],
    files: { fileName: string; fileLink: string }[],
    author: { name: string; profileLink: string },
    isPublic: boolean  // Legg til isPublic for å angi offentlighetsstatus
  ) => void;
}

export default function CreateProject({ addProject }: CreateProjectProps) {
  const [projectName, setProjectName] = useState('');
  const [category, setCategory] = useState('Development');
  const [publishedDate, setPublishedDate] = useState('');
  
  // Demo state
  const [demoTitle, setDemoTitle] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [demos, setDemos] = useState<{ title: string; link: string }[]>([]);

  // File state
  const [fileName, setFileName] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [files, setFiles] = useState<{ fileName: string; fileLink: string }[]>([]);

  // Author state
  const [authorName, setAuthorName] = useState('');
  const [authorProfileLink, setAuthorProfileLink] = useState('');

  // Ny state for å håndtere public/private prosjekter
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject(projectName, category, publishedDate, demos, files, {
      name: authorName,
      profileLink: authorProfileLink,
    }, isPublic);
    // Tilbakestiller feltene etter innsending
    setProjectName('');
    setCategory('Development');
    setPublishedDate('');
    setDemos([]);
    setFiles([]);
    setAuthorName('');
    setAuthorProfileLink('');
    setIsPublic(true);  // Tilbakestiller offentlighetsstatus
  };

  const addDemo = () => {
    setDemos([...demos, { title: demoTitle, link: demoLink }]);
    setDemoTitle('');
    setDemoLink('');
  };

  const addFile = () => {
    setFiles([...files, { fileName, fileLink }]);
    setFileName('');
    setFileLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
      <div>
        <label htmlFor="projectName">Prosjektnavn:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
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

      {/* Publiseringsdato */}
      <div>
        <label htmlFor="publishedDate">Publiseringsdato:</label>
        <input
          type="date"
          id="publishedDate"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}  // Oppdaterer state med valgt dato
        />
      </div>

      {/* Public/Private status */}
      <div>
        <label htmlFor="isPublic">Offentlig:</label>
        <input
          type="checkbox"
          id="isPublic"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}  // Oppdaterer offentlig status
        />
      </div>

      {/* Legg til demo */}
      <div>
        <label htmlFor="demoTitle">Demo tittel:</label>
        <input
          type="text"
          id="demoTitle"
          value={demoTitle}
          onChange={(e) => setDemoTitle(e.target.value)}
          placeholder="Legg til demo tittel"
        />
        <label htmlFor="demoLink">Demo lenke:</label>
        <input
          type="text"
          id="demoLink"
          value={demoLink}
          onChange={(e) => setDemoLink(e.target.value)}
          placeholder="Legg til demo lenke"
        />
        <button type="button" onClick={addDemo}>Legg til demo</button>
        <ul>
          {demos.map((demo, index) => (
            <li key={index}>{demo.title}: {demo.link}</li>
          ))}
        </ul>
      </div>

      {/* Legg til filer */}
      <div>
        <label htmlFor="fileName">Filnavn:</label>
        <input
          type="text"
          id="fileName"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Legg til filnavn"
        />
        <label htmlFor="fileLink">Fil lenke:</label>
        <input
          type="text"
          id="fileLink"
          value={fileLink}
          onChange={(e) => setFileLink(e.target.value)}
          placeholder="Legg til fil lenke"
        />
        <button type="button" onClick={addFile}>Legg til fil</button>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.fileName}: {file.fileLink}</li>
          ))}
        </ul>
      </div>

      {/* Forfatterinformasjon */}
      <div>
        <label htmlFor="authorName">Forfatter navn:</label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Skriv forfatterens navn"
        />
        <label htmlFor="authorProfileLink">Forfatter profil lenke:</label>
        <input
          type="text"
          id="authorProfileLink"
          value={authorProfileLink}
          onChange={(e) => setAuthorProfileLink(e.target.value)}
          placeholder="Skriv forfatterens profil lenke"
        />
      </div>

      <button type="submit">Opprett prosjekt</button>
    </form>
  );
}

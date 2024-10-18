import { useState, useEffect } from 'react';
import { getPortfolioProjects } from '../services/api';
import { ProjectsSchema } from '../schemas/zodSchemas';
import { z } from 'zod';

// Definerer ProjectType for å gi prosjektene riktig type
interface ProjectType {
  name: string;
  category: string;
}

export function usePortfolioProjects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);  // Angi riktig type for prosjektene
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getPortfolioProjects();  // Hent data fra API
        const parsedData = ProjectsSchema.parse(data);  // Validerer og parser dataene med Zod
        setProjects(parsedData);  // Setter de parsete prosjektene i state
      } catch (err) {
        if (err instanceof z.ZodError) {
          setError('Validation failed for projects data');
        } else {
          setError('Failed to fetch projects');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };  // Returnerer prosjektene, lastestatus og feil
}

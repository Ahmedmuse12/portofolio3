// src/schemas/zodSchemas.ts
import { z } from 'zod';

// Definerer et Zod-skjema for porteføljeprosjekter
const ProjectSchema = z.object({
  name: z.string(),           // Prosjektnavnet må være en streng
  category: z.string(),       // Kategorien må være en streng
});

// Definerer et skjema for en liste av prosjekter
export const ProjectsSchema = z.array(ProjectSchema);

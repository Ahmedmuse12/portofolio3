import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();
app.use('/*', cors());

// Eksempel på prosjekter med passende data
const projects = [
  {
    id: 1,
    title: 'Building a React app',
    description: 'A project to build a single page application using React',
    createdAt: new Date('2023-01-01').toISOString(),
    category: 'Development',
  },
  {
    id: 2,
    title: 'Designing a website',
    description: 'A project to design a responsive website for a client',
    createdAt: new Date('2023-02-15').toISOString(),
    category: 'Design',
  },
  {
    id: 3,
    title: 'Implementing an API',
    description: 'Creating a REST API for a project management system',
    createdAt: new Date('2023-03-10').toISOString(),
    category: 'Backend',
  },
  {
    id: 4,
    title: 'Database Management',
    description: 'Managing database operations for a client project',
    createdAt: new Date('2023-04-20').toISOString(),
    category: 'Database',
  }
];

// Endepunkt for å returnere prosjektene
app.get('/projects', (c) => {
  return c.json(projects); // Returnerer prosjektene som JSON
});

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});

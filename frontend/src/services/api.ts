// src/services/api.ts
export async function getPortfolioProjects() {
    try {
      const response = await fetch('/api/portfolio-projects');  
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return await response.json();  
    } catch (error) {
      throw error;  
    }
  }
  
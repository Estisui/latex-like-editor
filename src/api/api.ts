import axios from 'axios';

// Set up base API instance
const api = axios.create({
  baseURL: 'https://api.yourbackendurl.com', // Replace with actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication
export const login = (username: string, password: string) =>
  api.post('/login/', { username, password });

export const logout = () => api.post('/logout/');

export const register = (username: string, password: string) =>
  api.post('/register', { username, password });

// Works
export const fetchWorks = () => api.get('/api/works/');
export const createWork = (title: string, description: string) =>
  api.post('/api/works/', { title, description });
export const updateWork = (id: number, title: string, description: string) =>
  api.put(`/api/works/${id}/`, { title, description });
export const deleteWork = (id: number) => api.delete(`/api/works/${id}/`);

// Formulas
export const fetchFormulas = () => api.get('/api/formulas');
export const createFormula = (work_id: number, content: string) =>
  api.post('/api/formulas/', { work_id, content });
export const updateFormula = (id: number, content: string) =>
  api.put(`/api/formulas/${id}/`, { content });
export const deleteFormula = (id: number) => api.delete(`/api/formulas/${id}/`);

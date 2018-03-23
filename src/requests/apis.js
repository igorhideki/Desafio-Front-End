import axios from 'axios';

const base = 'http://localhost:3001';
const api = axios.create({
  baseURL: base
});
const apis = {
  loadCategorias: () => api.get('tiposComunicados'),
  loadComunicados: () => api.get('comunicados')
};

export default apis;

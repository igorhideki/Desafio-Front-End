import axios from 'axios';

const base = 'http://localhost:3001';
const api = axios.create({
  baseURL: base,
});

const apiFile = axios.create({
  baseURL: base,
  responseType: 'blob',
});

const apis = {
  loadCategorias: () => api.get('tiposComunicados'),
  loadComunicados: () => api.get('comunicados'),
  downloadFile: (url, filename = url) => {
    apiFile.get(url).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('id', filename);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  },
  loadComunicadoById: (id) => api.get(`comunicados/${id}`),
  updateComunicado: (id, update) => api.put(`comunicados/${id}`, update)
};

export default apis;

import moment from 'moment';

const getVisiblesComunicados = (comunicados, { type = -1 }) => {
  const formatDate = 'YYYY-MM-DD HH:mm';
  return comunicados.filter((comunicado) => {
    if (type === -1) {
      return comunicado;
    }
    return comunicado.type === type;
  }).sort((a, b) => {
    return moment(a.date, formatDate).format() < moment(b.date, formatDate).format() ? 1 : -1;
  });
};

export default getVisiblesComunicados;


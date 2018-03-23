const getVisiblesComunicados = (comunicados, { type = -1 }) => {
  return comunicados.filter((comunicado) => {
    if (type === -1) {
      return comunicado;
    }
    return comunicado.type === type;
  });
};

export default getVisiblesComunicados;

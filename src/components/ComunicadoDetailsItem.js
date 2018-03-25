import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ComunicadoItemFile from './ComunicadoItemFile';

const handleCategoriaItem = (type) => {
  switch (type) {
    case 0:
      return { color: 'comunicados__item--orange', name: 'Informativos SUN' };
    case 1:
      return { color: 'comunicados__item--blue', name: 'Força de Vendas' };
    case 2:
      return { color: 'comunicados__item--green', name: 'Vivo Ligado' };
    case 3:
      return { color: 'comunicados__item--purple', name: 'Turbine Suas Vendas' };
    default:
      return { color: '', name: '' };
  }
};

const handleFormatDate = (date) => {
  const parseDate = moment(date, 'YYYY-MM-DD HH:mm');
  return moment(parseDate).format('DD/MM/YYYY - HH[h]mm');
};

const ComunicadoDetailsItem = (props) => (
  <div className={`comunicados__item comunicados__item--no-pointer ${handleCategoriaItem(props.type).color}`}>
    <div className="comunicados__row">
      <span className="comunicados__title">{props.title}</span>
      <span className="comunicados__id">{props.id}</span>
    </div>
    {props.files && props.files.length > 0 && props.files.map((file) => {
      return <ComunicadoItemFile key={file.name} {...file} />;
    })}
    <div className="comunicados__row">
      <span className="comunicados__type">{handleCategoriaItem(props.type).name}</span>
      <span className="comunicados__date">{handleFormatDate(props.date)}</span>
    </div>
    <div className="mt-m">
      {props.description !== '' && <p className="comunicados__subtitle">Resumo:</p>}
      <p className="comunicados__description">{props.description}</p>
      {props.description !== '' && <p className="comunicados__subtitle">Descrição:</p>}
      <p className="comunicados__description">{props.fullDescription}</p>
    </div>
  </div>
);

ComunicadoDetailsItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  fullDescription: PropTypes.string,
  type: PropTypes.number,
  files: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string
  }))
};

export default ComunicadoDetailsItem;

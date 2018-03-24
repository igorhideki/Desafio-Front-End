import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
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

const handleComunicadoSeen = (seen) => {
  return seen ? 'comunicados__item--seen': '';
};

const handleOnClickItem = (props) => {
  props.history.push(`details/${props.id}`);
};

const handleFormatDate = (date) => {
  const parseDate = moment(date, 'YYYY-MM-DD HH:mm');
  return moment(parseDate).format('DD/MM/YYYY - HH[h]mm');
};

const ComunicadoItem = withRouter((props) => (
  <li
    className={`comunicados__item ${handleComunicadoSeen(props.seen)} ${handleCategoriaItem(props.type).color}`}
    onClick={() => handleOnClickItem(props)}
  >
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
  </li>
));

ComunicadoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  type: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
  }))
};

export default ComunicadoItem;


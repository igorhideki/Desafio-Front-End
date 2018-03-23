import React from 'react';
import PropTypes from 'prop-types';
import api from '../requests/apis';

const handleAnexoTypeIcon = (type) => {
  const isImage = /.png$|.jpg$|.jpeg$|.gif$/;
  const isPDF = /.pdf$/;
  if (isImage.test(type)) {
    return 'far fa-file-image';
  }
  if (isPDF.test(type)) {
    return 'far fa-file-pdf';
  }
  return 'far fa-file';
};

const ComunicadoItemFile = (props) => (
  <div className="anexo">
    <span className="anexo__icon">
      <i className={handleAnexoTypeIcon(props.url)}></i>
    </span>
    <span className="anexo__name">{props.name}</span>
    <span
      className="anexo__link"
      onClick={() => api.downloadFile(props.url)}
    >
      <i className="fas fa-cloud-download-alt"></i>
    </span>
  </div>
);

ComunicadoItemFile.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default ComunicadoItemFile;

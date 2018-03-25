import React from 'react';
import PropTypes from 'prop-types';

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
      onClick={(e) => {
        e.stopPropagation();
        props.handleOnClickDownload(e, props.url);
      }}
    >
      <i className="fas fa-cloud-download-alt"></i>
    </span>
  </div>
);

ComunicadoItemFile.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  handleOnClickDownload: PropTypes.func
};

export default ComunicadoItemFile;

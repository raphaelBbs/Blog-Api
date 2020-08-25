import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ErrorPage = (props) => {
  const { dataPost } = props;
  // Si le total est superieur à 1, le message aura un "s" à tâches
  // sinon il sera au singulier

  return (
    <div className="div-404">
      <p className="div-404-p"> ERREUR 404</p>
      <div className="screen" />
    </div>

  );
};

export default ErrorPage;
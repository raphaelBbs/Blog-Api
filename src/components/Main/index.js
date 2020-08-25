import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Main = (props) => {
  const { dataPost } = props;
  // Si le total est superieur à 1, le message aura un "s" à tâches
  // sinon il sera au singulier

  return (
    <div>
      <h1>Dev of throne</h1>
      <div className="main">

        {
     dataPost.map((todoObject) => (
       <article className="article" key={todoObject.id}>
         <h2>{todoObject.title}</h2>
         <span>{todoObject.category}</span>
         <p>{todoObject.excerpt}</p>
       </article>
     ))
      }

      </div>
    </div>

  );
};

Main.propTypes = {
  dataPost: PropTypes.string.isRequired,
};

export default Main;

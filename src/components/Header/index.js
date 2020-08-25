import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = (props) => {
  const { dataCategories } = props;

  return (
    <div className="div-header">
      <ul className="header">
        {
        dataCategories.map((todoObject) => (

          <li className="li" key={todoObject.label}>  <a href={todoObject.route}>{todoObject.label}</a></li>
        ))
      }
      </ul>
    </div>
  );
};

Header.propTypes = {
  dataCategories: PropTypes.string.isRequired,
};

export default Header;

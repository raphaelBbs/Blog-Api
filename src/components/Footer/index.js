import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Footer = (props) => {
  const { total } = props;
  

  return (
    <div className="footer">
     <p>DevOfThrones, le blog du developpeurr Reaact - 2020 &copy;</p>
    </div>
  );
};

// Counter.propTypes = {
//   total: PropTypes.number.isRequired,
// };

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';


const IconBoxGroup = props => (
  <div className={`row icon-boxes style-3 ${props.className}`}>
    {props.children}
  </div>
);

IconBoxGroup.defaultProps = {
  children: null,
  className: '',
};

IconBoxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

export default IconBoxGroup;

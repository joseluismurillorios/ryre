import React from 'react';
import PropTypes from 'prop-types';

import fetchAttributes from '../../../helpers/helper-fetch-props';

const Caption = props => (
  <div
    {...fetchAttributes(props)}
    className={`tp-caption ${props.className}`}
    style={props.style}
  >
    {props.children}
  </div>
);

Caption.defaultProps = {
  className: '',
  style: { },
};


Caption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

export default Caption;

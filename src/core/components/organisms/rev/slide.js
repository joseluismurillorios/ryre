import React from 'react';
import PropTypes from 'prop-types';

import fetchAttributes from '../../../helpers/helper-fetch-props';

const Slide = props => (
  <li
    {...fetchAttributes(props)}
  >
    {props.children}
  </li>
);

Slide.defaultProps = {
  transition: 'random-premium',
  slotamount: '10',
  title: 'Go',
};


Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]),
};

export default Slide;

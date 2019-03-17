import React from 'react';
import PropTypes from 'prop-types';

import fetchAttributes from '../../../helpers/helper-fetch-props';

const defaultProps = {
  className: 'v-line dark',
  x: 'center',
  y: 'center',
  width: '2',
  height: '100',
  voffset: '80',
  transformIdle: 'o:1;s:500;scaleY:1;',
  transformIn: 'scaleX:1;scaleY:0;opacity:0;',
  transformOut: 'opacity:0;s:1000;e:Power3.easeInOut;',
  start: '1400',
  elementdelay: '0.01',
};

const Shape = (props) => {
  return (
    <div
      {...fetchAttributes(props)}
      className={`tp-caption tp-shape ${props.className}`}
    />
  );
};

Shape.defaultProps = {
  ...defaultProps,
};


Shape.propTypes = {
  className: PropTypes.string,
};

export default Shape;

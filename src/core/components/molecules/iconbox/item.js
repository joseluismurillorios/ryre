import React from 'react';
import PropTypes from 'prop-types';

import assets from '../../../assets';

const IconBoxItem = ({
  className,
  icon,
  text,
  children,
}) => (
  <div className={className}>
    <div className="service-item-box">
      {children || text}
      <img className="icon" src={assets[icon]} alt="" />
    </div>
  </div>
);

IconBoxItem.defaultProps = {
  children: false,
  className: '',
  icon: '',
  text: '',
};

IconBoxItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.bool,
  ]),
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default IconBoxItem;

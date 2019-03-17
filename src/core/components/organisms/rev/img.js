import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fetchAttributes from '../../../helpers/helper-fetch-props';

class Img extends Component {
  render() {
    const { alt, className } = this.props;
    return (
      <img
        {...fetchAttributes(this.props)}
        alt={alt}
        className={`rev-slidebg ${className}`}
        ref={(el) => { this.pic = el; }}
      />
    );
  }
}

Img.defaultProps = {
  className: '',
  alt: '',
};


Img.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Img;

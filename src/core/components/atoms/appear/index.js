import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from '../../../helpers/helper-jquery';
import { throttle } from '../../../helpers/helper-util';

class Appear extends Component {
  constructor(props) {
    super(props);
    this.state = { isHide: false };
    this.throttledScroll = throttle(this.throttledScroll.bind(this), 200);
    this.prev = 0;
  }

  componentDidMount() {
    this.scroll = document.getElementById('MainScroll');
    this.scroll.addEventListener('scroll', this.throttledScroll);
    this.scroll.dispatchEvent(new Event('scroll'));
  }

  componentWillUnmount() {
    this.scroll.removeEventListener('scroll', this.throttledScroll);
  }

  throttledScroll() {
    const { onAppear } = this.props;
    const { isHide } = this.state;
    const top = $('#MainScroll').height();
    if ($(this.appearEl).offset().top < top) {
      if (isHide) {
        this.setState({ isHide: true });
      } else {
        onAppear();
        this.setState({ isHide: false });
      }
    }

    this.prev = $(this.appearEl).offset().top;
  }

  render() {
    const { children, className } = this.props;
    const { isHide } = this.state;
    const classHide = isHide ? 'hide' : '';
    return (
      <div ref={(el) => { this.appearEl = el; }} className={`${classHide} ${className}`}>{children}</div>
    );
  }
}

Appear.defaultProps = {
  className: '',
  onAppear: () => {},
};

Appear.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  className: PropTypes.string,
  onAppear: PropTypes.func,
};

export default Appear;

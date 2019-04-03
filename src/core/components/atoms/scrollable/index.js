import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isMac } from '../../../helpers/helper-util';

class Scrollable extends Component {
  constructor(props) {
    super(props);
    this.wheel = this.wheel.bind(this);
    this.handle = this.handle.bind(this);
    this.goUp = true;
    this.end = null;
    this.interval = null;
    this.animationInterval = 15;
    this.scrollSpeed = 15;
  }

  componentDidMount() {
    if (isMac) {
      this.scrollable.addEventListener('wheel', this.wheel, false);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (isMac) {
      this.scrollable.removeEventListener('wheel', this.wheel, false);
    }
  }

  wheel(event) {
    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    this.handle(delta);
    if (event.preventDefault) {
      event.preventDefault();
    }
    // eslint-disable-next-line no-param-reassign
    event.returnValue = false;
  }

  handle(delta) {
    if (this.end == null) {
      this.end = this.scrollable.scrollTop;
    }
    this.end -= 20 * delta;
    this.goUp = delta > 0;

    if (this.interval == null) {
      this.interval = setInterval(() => {
        const { scrollTop } = this.scrollable;
        const step = Math.round((this.end - scrollTop) / this.scrollSpeed);
        const innerRect = this.inner.getBoundingClientRect();

        if ((scrollTop <= 0)
          || (scrollTop >= innerRect.height - this.scrollable.clientHeight)
          || (this.goUp && step > -1)
          || (!this.goUp && step < 1)) {
          clearInterval(this.interval);
          this.interval = null;
          this.end = null;
        }
        this.scrollable.scrollTop = scrollTop + step;
      }, this.animationInterval);
    }
  }

  render() {
    const {
      children,
      className,
      id,
      setRef,
      disabled,
    } = this.props;
    return (
      <div
        id={id}
        className={disabled ? 'nonscrollable' : 'scrollable'}
        ref={(el) => {
          this.scrollable = el;
          setRef(el);
        }}
      >
        <div
          className={className}
          ref={(el) => { this.inner = el; }}
        >
          {children}
        </div>
      </div>
    );
  }
}

Scrollable.defaultProps = {
  className: '',
  id: '',
  disabled: false,
  setRef: () => {},
};

Scrollable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  setRef: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Scrollable;

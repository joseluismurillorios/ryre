import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // const {
    //   onTap,
    //   value,
    //   name,
    // } = this.props;
    // Get Cursor Position
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      // Prevent Component duplicates do ripple effect at the same time
      time: Date.now(),
    };

    // Get the element
    const { parentElement } = this.ripple;
    const button = parentElement;
    button.classList.remove('btn-animate');

    const buttonPos = button.getBoundingClientRect();

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Make a Square Ripple
    const rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);

    // Make Ripple Position to be center
    const centerize = rippleWidthShouldBe / 2;

    this.ripple.style.height = `${rippleWidthShouldBe}px`;
    this.ripple.style.width = `${rippleWidthShouldBe}px`;
    this.ripple.style.top = `${cursorPos.top - buttonPos.top - centerize}px`;
    this.ripple.style.left = `${cursorPos.left - buttonPos.left - centerize}px`;

    button.classList.add('btn-animate');
  }

  render() {
    const {
      size,
      color,
      rounded,
      className,
      onTap,
      tabIndex,
      disabled,
      children,
      value,
      name,
      onMouseMove,
    } = this.props;
    const clss = `btn ${size ? `btn-${size}` : ''} btn-${color} ${rounded ? 'rounded' : ''}`;
    return (
      <button
        type="button"
        className={`${clss} ${className}`}
        onClick={() => onTap({ value, name })}
        onMouseUp={this.handleClick}
        onTouchEnd={this.handleClick}
        ref={(el) => { this.button = el; }}
        tabIndex={tabIndex}
        disabled={disabled}
        onMouseMove={onMouseMove}
        data-toggle="tooltip"
        data-placement="right"
        title="Tooltip on right"
      >
        <div
          ref={(el) => { this.ripple = el; }}
          className="ripple"
        />
        {children}
      </button>
    );
  }
}


Button.defaultProps = {
  onTap: () => {},
  onMouseMove: () => {},
  tabIndex: '-100',
  size: '',
  color: 'dark',
  className: '',
  rounded: false,
  disabled: false,
  value: '',
  name: '',
};

Button.propTypes = {
  onTap: PropTypes.func,
  onMouseMove: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  tabIndex: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
};

export default Button;

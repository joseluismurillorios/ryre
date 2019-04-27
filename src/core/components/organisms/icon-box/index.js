import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import IconArch from '../../molecules/icons/architecture';
// import IconBrainstorm from '../../molecules/icons/brainstorm';
// import IconDesign from '../../molecules/icons/design-tool';

import assets from '../../../assets';

import dict from '../../../dict';

class IconBox extends Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    const bx1 = this.box1.getBoundingClientRect();
    const bx2 = this.box2.getBoundingClientRect();
    const bx3 = this.box3.getBoundingClientRect();
    const bx4 = this.box4.getBoundingClientRect();
    const max = Math.max(bx1.height, bx2.height, bx3.height, bx4.height);
    this.box1.style.height = `${max}px`;
    this.box2.style.height = `${max}px`;
    this.box3.style.height = `${max}px`;
    this.box4.style.height = `${max}px`;
  }

  render() {
    return (
      <div className="row equal-height-container">
        <div ref={(el) => { this.box1 = el; }} className="col-md-3 service-item-wrap equal-height">
          <h2 className="mt-0">Riesgos y Resiliencias</h2>
          <p>{dict.es['objectives.main']}</p>
        </div>
        <div ref={(el) => { this.box2 = el; }} className="col-md-3 service-item-wrap equal-height">
          <div className="service-item-box text-center">
            {/* <IconBrainstorm /> */}
            <img src={assets.IconBrainstorm} alt="Identificar" />
            <h3>Identificar</h3>
            <p className="mb-0 hidden-text">{dict.es['objectives.one']}</p>
          </div>
        </div>
        <div ref={(el) => { this.box3 = el; }} className="col-md-3 service-item-wrap equal-height">
          <div className="service-item-box text-center">
            {/* <IconDesign /> */}
            <img src={assets.IconDesign} alt="Identificar" />
            <h3>Determinar</h3>
            <p className="mb-0 hidden-text">{dict.es['objectives.two']}</p>
          </div>
        </div>
        <div ref={(el) => { this.box4 = el; }} className="col-md-3 service-item-wrap equal-height">
          <div className="service-item-box text-center">
            {/* <IconArch /> */}
            <img src={assets.IconArch} alt="Identificar" />
            <h3>Planear</h3>
            <p className="mb-0 hidden-text">{dict.es['objectives.three']}</p>
          </div>
        </div>
      </div>
    );
  }
}

IconBox.defaultProps = {
};

IconBox.propTypes = {
};

export default IconBox;

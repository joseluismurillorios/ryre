import React from 'react';
// import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

import { PARTNERS } from '../../../assets';

const config = {
  0: {
    items: 2,
  },
  768: {
    items: 3,
  },
  979: {
    items: 4,
  },
};

const navText = ['<i class=\'implanf-chevron-left\'></i>', '<i class=\'implanf-chevron-right\'></i>'];

const OwlPartners = () => (
  <OwlCarousel
    className="owl-carousel owl-theme"
    responsive={config}
    // dots={false}
    navText={navText}
    slideBy="page"
    nav
    // autoplay
    // autoplayTimeout={6000}
  >
    {
      PARTNERS.map(obj => (
        <div key={obj.link} className="item text-center ml-20 mr-20 mb-20">
          <a href={obj.link}>
            <img src={obj.url} alt="" style={{ maxWidth: '150px', margin: '0 auto' }} />
            <small className="color-white">{obj.info}</small>
          </a>
        </div>
      ))
    }

  </OwlCarousel>
);

OwlPartners.defaultProps = {
};

OwlPartners.propTypes = {
};

export default OwlPartners;

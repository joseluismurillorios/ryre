import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import jQuery from '../../../helpers/helper-jquery';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        sliderLayout: 'standard',
        delay: 12000,
        responsiveLevels: [4096, 1024, 778, 420],
        gridwidth: [1200, 1024, 800, 400],
        gridheight: [700, 700, 600, 600],
        minHeight: 300,

        hideThumbs: 10,
        fullScreenAutoWidth: 'off',

        navigation: {
          onHoverStop: 'off',

          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: false,
          },

          arrows: {
            enable: true,
            style: 'hades',
            tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div> <div class="tp-arr-titleholder">{{title}}</div> </div>',
            left: {
              h_align: 'left',
              v_align: 'center',
              h_offset: 0,
              v_offset: 0,
            },
            right: {
              h_align: 'right',
              v_align: 'center',
              h_offset: 0,
              v_offset: 0,
            },
          },

          bullets: {
            style: '',
            enable: true,
            hide_onmobile: true,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: 'horizontal',
            space: 8,
            h_align: 'center',
            v_align: 'bottom',
            h_offset: 0,
            v_offset: 40,
            tmp: '',
          },
        },

        parallax: {
          type: 'mouse',
          origo: 'slidercenter',
          speed: 500,
          levels: [1, 5, 10, 15, 20, 25, 30, 35, 40,
            45, 46, 47, 48, 49, 50, 51, 55],
          disable_onmobile: 'on',
        },

        spinner: 'spinner5',
      },
    };

    this.jquery = jQuery;
  }

  componentDidMount() {
    const props = {
      ...this.props,
      config: {},
    };
    delete props.children;
    delete props.config;
    const { config: propsConfig } = this.props;
    const { config: stateConfig } = this.state;
    const config = {
      ...stateConfig,
      ...propsConfig,
      ...props,
    };
    this.jquery(document).ready(() => {
      this.slider = this.jquery(this.carousel).revolution(config);
      const { onMounted, sliderH } = this.props;
      onMounted(
        this.slider[0].clientHeight > 0 ? this.slider[0].clientHeight : sliderH,
      );
    });
  }

  componentDidUpdate(prevProps) {
    const { lang } = this.props.common;
    if (lang !== prevProps.common.lang) {
      this.slider.revredraw();
    }
  }

  componentWillUnmount() {
    this.slider.revkill();
  }

  render() {
    const { id, children, sliderH } = this.props;
    return (
      <div id={id} className="rev_slider_wrapper" style={{ height: sliderH, background: '#3b55e6' }}>
        <div
          className="rev_slider"
          ref={(el) => { this.carousel = el; }}
          data-version="5.0"
        >
          <ul>
            {children}
          </ul>
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  id: '',
  common: {},
  config: {},
  onMounted: () => {},
};

Slider.propTypes = {
  id: PropTypes.string,
  common: PropTypes.objectOf(PropTypes.any),
  config: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  onMounted: PropTypes.func,
  sliderH: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  common: state.common,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

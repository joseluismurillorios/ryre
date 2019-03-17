/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import Hero from '../../organisms/hero';

import Footer from '../../organisms/footer';

import { setLoader } from '../../../redux/actions/common';

import Scrollable from '../../atoms/scrollable';

class Home extends Component {
  componentDidMount() {
    const { mapLoading } = this.props;
    mapLoading(false);
  }

  render() {
    return (
      <div
        id="Home"
        className="app__page"
        ref={(el) => { this.container = el; }}
        disabled
      >
        <Scrollable
          className="fs-home open"
          id="MainScroll"
          style={{ backgroundColor: 'transparent' }}
        >
          <Hero goTo="Footer" />

          <Footer id="Footer" />
        </Scrollable>
      </div>
    );
  }
}

Home.defaultProps = {
  mapLoading: () => { },
};

Home.propTypes = {
  mapLoading: PropTypes.func,
};

const mapStateToProps = state => ({
  common: state.common,
  esri: state.esri,
  info: state.info,
});

const mapDispatchToProps = {
  mapLoading: setLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setLoader } from '../../../redux/actions/common';
import { loadEsri } from '../../../redux/actions/esri/async';

import PageTitle from '../../atoms/page-title';
import Scrollable from '../../atoms/scrollable';

import Footer from '../../organisms/footer';
import Esri from '../../organisms/esri';

class MainMap extends Component {
  componentDidMount() {
    const { esri, load, mapLoading } = this.props;
    if (Object.keys(esri).length < 1) {
      load();
    }
    mapLoading(false);
  }

  render() {
    const {
      // mapLoading,
      esri,
      match,
    } = this.props;
    const path = match.path.substring(1, match.path.length);
    const paths = path.split('/');
    paths.pop();
    return (
      <Scrollable
        id="Map"
      >
        <PageTitle
          text={<span>Clima</span>}
          paths={paths}
        />
        <Esri
          // onLoad={mapLoading}
          modules={esri}
          className="esri-map-half"
        />
        <Footer id="Footer" />
      </Scrollable>
    );
  }
}

MainMap.defaultProps = {
  mapLoading: () => { console.log('webmap loaded successfully'); },
  load: () => {},
  match: false,
};

MainMap.propTypes = {
  esri: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  match: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  mapLoading: PropTypes.func,
  load: PropTypes.func,
};

const mapStateToProps = state => ({
  common: state.common,
  esri: state.esri,
  info: state.info,
});

const mapDispatchToProps = {
  mapLoading: setLoader,
  load: loadEsri,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);

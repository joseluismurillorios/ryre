/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageTitle from '../../atoms/page-title';
import Container from '../../atoms/container';
import Section from '../../atoms/section';

import Footer from '../../organisms/footer';
import Linked from '../../atoms/linked';

import { setLoader } from '../../../redux/actions/common';

import Scrollable from '../../atoms/scrollable';

import dict from '../../../dict';
import assets from '../../../assets';

class Generic extends Component {
  componentDidMount() {
    const { mapLoading } = this.props;
    mapLoading(false);
  }

  render() {
    const { match } = this.props;
    const path = match.path.substring(1, match.path.length);
    const paths = path.split('/');
    paths.pop();
    return (
      <div
        id="Generic"
        className="app__page"
        ref={(el) => { this.container = el; }}
        disabled
      >
        <Scrollable
          className="fs-home open"
          id="MainScroll"
          style={{ backgroundColor: 'transparent' }}
        >
          <PageTitle
            text={<span>Presentación</span>}
            paths={paths}
            aether
          />
          <Section className="promo-section bg-light style-2">
            <Container>
              <div className="col-md-5 text-center mb-mdm-60">
                <img
                  src={assets.device}
                  alt=""
                  className="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.2s',
                    animationName: 'fadeInLeft',
                  }}
                />
              </div>
              <div className="col-md-7 promo-descr">
                <h3>IMPLAN RYRE WEB</h3>
                <p>{dict.es['presentation.one']}</p>
                <p>{dict.es['presentation.two']}</p>
                <p>{dict.es['presentation.three']}</p>
                <Linked url="/noticias/reportes" className="btn btn-md btn-dark mt-10">Explorar</Linked>
              </div>
            </Container>
          </Section>
          <Footer />
        </Scrollable>
      </div>
    );
  }
}

Generic.defaultProps = {
  mapLoading: () => {},
  match: false,
};

Generic.propTypes = {
  mapLoading: PropTypes.func,
  match: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

const mapStateToProps = state => ({
  common: state.common,
  esri: state.esri,
  info: state.info,
});

const mapDispatchToProps = {
  mapLoading: setLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Generic);

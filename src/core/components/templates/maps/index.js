/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageTitle from '../../atoms/page-title';
import Appear from '../../atoms/appear';
import Container from '../../atoms/container';
import Section from '../../atoms/section';
import Scrollable from '../../atoms/scrollable';
import GmapIframe from '../../atoms/gmap-iframe';
import Footer from '../../organisms/footer';
import Row from '../../atoms/row';
import Linked from '../../atoms/linked';

import {
  TIJUANA_IFRAME,
  ROSARITO_IFRAME,
  CARTA_URBANA,
} from '../../../../config';

import { setLoader } from '../../../redux/actions/common';
// import assets from '../../../assets';

// import dict from '../../../dict';

class Maps extends Component {
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
        id="Maps"
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
            text={<span>Mapas</span>}
            paths={paths}
            aether
          />
          <Section className="pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 bottom-line">
                      Tijuana 2014
                    </h2>
                  </div>
                </div>

                <GmapIframe url={TIJUANA_IFRAME} />
              </Appear>
            </Container>
          </Section>

          <Section className="bg-dark pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="color-white text-center mb-30 bottom-line">
                      Rosarito 2018
                    </h2>
                  </div>
                </div>

                <GmapIframe url={ROSARITO_IFRAME} />
              </Appear>
            </Container>
          </Section>

          <Section className="pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row mb-20">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 bottom-line">
                      PMDU Y PDUCP
                    </h2>
                    <p className="subheading style-2">
                      Carta Urbana del Programa de Desarrollo Urbano del Centro de Población
                    </p>
                    <p className="subheading style-2">Tijuana 2010-2030</p>
                  </div>
                </div>
                <GmapIframe url={CARTA_URBANA} />
                <div className="row mt-40">
                  <div className="col-md-6 text-center">
                    <p>Plan Municipal de Desarrollo Urbano de Tijuana, B.C. (PMDU T 2008-2030)</p>
                    <a target="_blank" href="http://implan.tijuana.gob.mx/pdf/Documento%20PMD%20oct%2008.pdf" className="btn btn-md btn-color rounded mt-10">
                      Descargar PDF
                    </a>
                  </div>
                  <div className="col-md-6 text-center">
                    <p>
                      Programa de Desarrollo Urbano del Centro de Población de Tijuana 2010-2030
                    </p>
                    <a target="_blank" href="http://implan.tijuana.gob.mx/pdf/atlas/PDUCPT%202010-2030.pdf" className="btn btn-md btn-color rounded mt-10">
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </Appear>
            </Container>
          </Section>

          <Section className="bg-light pb-50 pt-50">
            <Container>
              <Row>
                <Appear>
                  <div className="col-sm-9 col-xs-12 text-center">
                    <h2 className="mb-0">¿Necesitas más información? ¡Envíanos tu mensaje!</h2>
                  </div>
                  <div className="col-sm-3 col-xs-12 text-center mt-mdm-20">
                    <Linked url="/contacto" className="btn btn-md btn-color rounded">
                      Contacto
                    </Linked>
                  </div>
                </Appear>
              </Row>
            </Container>
          </Section>

          <Footer />
        </Scrollable>
      </div>
    );
  }
}

Maps.defaultProps = {
  mapLoading: () => { },
  match: false,
};

Maps.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Maps);

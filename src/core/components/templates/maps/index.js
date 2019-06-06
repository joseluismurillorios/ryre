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

import Toggle from '../../molecules/toggle';

import {
  TIJUANA_IFRAME,
  ROSARITO_IFRAME,
  CARTA_URBANA,
  CARTA_URBANA_TIJUANA,
} from '../../../../config';

import { setLoader } from '../../../redux/actions/common';
import {
  EXTERNAL_LINKS,
  SPECIAL_STUDIES,
  CONTRIBUTIONS,
} from '../../../helpers/helper-constants';

// import dict from '../../../dict';

class Maps extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.path = match.path.substring(1, match.path.length);
    this.paths = this.path.split('/');
    this.paths.pop();
  }

  componentDidMount() {
    const { mapLoading } = this.props;
    mapLoading(true);
    setTimeout(() => {
      mapLoading(false);
    }, 500);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div
        id="Maps"
        className="app__page"
        ref={(el) => { this.container = el; }}
      >
        <Scrollable
          className="fs-home open"
          id="MainScroll"
          style={{ backgroundColor: 'transparent' }}
          toTop
        >
          <PageTitle
            text={<span>Mapas</span>}
            paths={this.paths}
            aether
          />
          <Section className="call-to-action style-3 bg-light pb-30 pt-30">
            <Container>
              <Row>
                <div className="col-xs-12 text-center">
                  <h2>¡Visita el mapa interactivo!</h2>
                  <div className="cta-button">
                    <Linked url="/gmaps" className="btn btn-md btn-color rounded">
                      Explorar
                    </Linked>
                  </div>
                </div>
              </Row>
            </Container>
          </Section>
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
                    <h2 className="text-center mb-30 bottom-line">
                      Rosarito 2018
                    </h2>
                  </div>
                </div>

                <GmapIframe url={ROSARITO_IFRAME} />
              </Appear>
            </Container>
          </Section>

          <Section className="bg-light pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row mb-10">
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
                <GmapIframe title="Tijuana" url={CARTA_URBANA} />
                {
                  CARTA_URBANA_TIJUANA.map(obj => (
                    <div key={obj.name} className="mt-20">
                      <GmapIframe title={obj.name} url={obj.url} />
                    </div>
                  ))
                }
                <div className="row mt-40">
                  <div className="col-md-6 text-center mb-20">
                    <p>Plan Municipal de Desarrollo Urbano de Tijuana, B.C. (PMDU T 2008-2030)</p>
                    <Linked
                      newTab
                      url="http://implan.tijuana.gob.mx/pdf/Documento%20PMD%20oct%2008.pdf"
                      className="btn btn-md btn-color rounded mt-10"
                    >
                      Descargar PDF
                    </Linked>
                  </div>
                  <div className="col-md-6 text-center">
                    <p>
                      Programa de Desarrollo Urbano del Centro de Población de Tijuana 2010-2030
                    </p>
                    <Linked
                      newTab
                      url="http://implan.tijuana.gob.mx/pdf/atlas/PDUCPT%202010-2030.pdf"
                      className="btn btn-md btn-color rounded mt-10"
                    >
                      Descargar PDF
                    </Linked>
                  </div>
                </div>
              </Appear>
            </Container>
          </Section>

          <Section className="pt-80 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row heading">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 mt-0 bottom-line">
                      Links a páginas externas
                    </h2>
                  </div>
                </div>
                {
                  Object.keys(EXTERNAL_LINKS).map(obj => (
                    <Toggle key={obj} className="mb-20" title={obj}>
                      {
                        EXTERNAL_LINKS[obj].map(el => (
                          <div key={el.link} className="mb-20">
                            <h6>{el.institution}</h6>
                            <Linked newTab url={el.link}>{el.title}</Linked>
                            <p>{el.description}</p>
                          </div>
                        ))
                      }
                    </Toggle>
                  ))
                }
              </Appear>
            </Container>
          </Section>

          <Section className="bg-primary pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row mb-20">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 bottom-line">
                      Estudios especiales
                    </h2>
                  </div>
                </div>
                <div className="row mt-40 flex-wrap">
                  {
                    SPECIAL_STUDIES.map(obj => (
                      <div key={obj.name} className="col-md-4 text-center">
                        <blockquote className="bg-light blockquote-style-1 mb-30">
                          <div className="dark">
                            {obj.name}
                          </div>
                          <Linked
                            newTab
                            url={obj.link}
                            className="btn btn-md btn-dark rounded mt-20"
                          >
                            Leer
                          </Linked>
                        </blockquote>
                      </div>
                    ))
                  }
                </div>
              </Appear>
            </Container>
          </Section>

          <Section className="pt-80 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row heading">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 mt-0 bottom-line">
                      Contribuciones
                    </h2>
                  </div>
                </div>
                {
                  Object.keys(CONTRIBUTIONS).map(obj => (
                    <Toggle key={obj} className="mb-20" title={obj}>
                      {
                        CONTRIBUTIONS[obj].map(el => (
                          <div key={el.title} className="mb-20">
                            <h6>{el.institution}</h6>
                            <Linked newTab url={el.link}>{el.title}</Linked>
                            <p>{el.description}</p>
                          </div>
                        ))
                      }
                    </Toggle>
                  ))
                }
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

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  mapLoading: setLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Maps);

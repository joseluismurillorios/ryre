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
import Footer from '../../organisms/footer';
import Row from '../../atoms/row';
import Linked from '../../atoms/linked';

import Toggle from '../../molecules/toggle';

import { setLoader } from '../../../redux/actions/common';
import {
  RISK_PLANNING_DOCS,
  REGULATORY_DOCS,
  SPECIAL_STUDIES_DOCS,
  TOOLS,
} from '../../../helpers/helper-constants';

// import dict from '../../../dict';

class Information extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.path = match.path.substring(1, match.path.length);
    this.paths = this.path.split('/');
    this.paths.pop();
  }

  componentDidMount() {
    const { mapLoading } = this.props;
    mapLoading(false);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div
        id="Information"
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
            text={<span>Información</span>}
            paths={this.paths}
            aether
          />

          <Section className="pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center">
                    <h3 className="text-center bottom-line">
                      Documentos de Planeación de Riesgos Vigentes
                    </h3>
                  </div>
                </div>
                <div className="row mt-10 flex-wrap">
                  {
                    RISK_PLANNING_DOCS.map(obj => (
                      <div key={obj.name} className="col-md-6 text-center">
                        <blockquote className="bg-light blockquote-style-2 mb-30">
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

          <Section className="bg-light pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h3 className="text-center">
                      Marco Normativo
                    </h3>
                    <p>
                      Principales normas vigentes
                      en las que se fundamenta el actuar de este organismo
                    </p>
                  </div>
                </div>
                <div className="row mt-10 flex-wrap">
                  {
                    REGULATORY_DOCS.map(obj => (
                      <div key={obj.name} className="col-md-6 text-center">
                        <blockquote className="bg-lighter blockquote-style-2 mb-30">
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

          <Section className="bg-primary pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center">
                    <h3 className="text-center bottom-line">
                      Estudios Especiales
                    </h3>
                  </div>
                </div>
                <div className="row mt-10 mt-sml-0 flex-wrap">
                  {
                    SPECIAL_STUDIES_DOCS.map(obj => (
                      <div key={obj.name} className="col-md-6 text-center">
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
                      Herramientas
                    </h2>
                  </div>
                </div>
                {
                  Object.keys(TOOLS).map(obj => (
                    <Toggle key={obj} className="mb-20" title={obj}>
                      {
                        TOOLS[obj].map(el => (
                          <div key={el.title} className="mb-20">
                            {
                              !!(el.institution) && (
                                <h6>{el.institution}</h6>
                              )
                            }
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

Information.defaultProps = {
  mapLoading: () => { },
  match: false,
};

Information.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Information);

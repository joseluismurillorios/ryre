/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageTitle from '../../atoms/page-title';
import Appear from '../../atoms/appear';
import Container from '../../atoms/container';
import Section from '../../atoms/section';
import Scrollable from '../../atoms/scrollable';
import Linked from '../../atoms/linked';
import Row from '../../atoms/row';
import Clock from '../../atoms/clock';

import Footer from '../../organisms/footer';
import Forecast from '../../organisms/forecast';
import Phase from '../../organisms/phase';

import { setLoader } from '../../../redux/actions/common';
import { setEarthPhases } from '../../../redux/actions/forecast';
import { NEWS_LINKS } from '../../../helpers/helper-constants';


class News extends Component {
  componentDidMount() {
    const { mapLoading, setPhases } = this.props;
    mapLoading(false);
    setPhases();
  }

  render() {
    const { match, forecast } = this.props;
    const {
      moonPhase,
      earthPhase,
      earthPhases,
      moonPhases,
      moonCurrent,
      earthCurrent,
      moonPhaseName,
      earthPhaseName,
    } = forecast;
    // const { forecastMetric } = forecast;
    const path = match.path.substring(1, match.path.length);
    const paths = path.split('/');
    paths.pop();
    return (
      <div
        id="News"
        className="app__page"
        ref={(el) => { this.container = el; }}
        disabled
      >
        <Scrollable
          className="fs-home open"
          id="MainScroll"
          style={{ backgroundColor: 'transparent' }}
          toTop
        >
          <PageTitle
            text={<span>Noticias</span>}
            paths={paths}
            aether
          />
          <Section className="pt-40 pb-80 pt-mdm-20 ">
            <Container>
              <Row>
                <h2 className="text-center mb-30 mb-mdm-10 bottom-line hidden-xs">
                  Clima
                </h2>
                <div className="col-sm-12 mb-40">
                  {
                    forecast && (
                      <Forecast forecast={forecast} />
                    )
                  }
                </div>

                {
                  earthPhases && (
                    <div className="col-md-6 mb-20">
                      <Phase
                        type="earth"
                        title="Fase Solar"
                        subtitle={earthPhaseName}
                        desc={[
                          <Clock noseconds />,
                          `Día: ${earthPhase.elapsed}`,
                          `Restantes: ${earthPhase.remaining}`,
                        ]}
                        phases={earthPhases}
                        current={earthCurrent}
                      />
                    </div>
                  )
                }

                {
                  moonPhase && (
                    <div className="col-md-6 mb-20">
                      <Phase
                        type="moon"
                        title="Fase Lunar"
                        subtitle={moonPhaseName}
                        desc={[
                          `Fase: ${moonPhase.phase.toFixed(2)}`,
                          `Luz: ${moonPhase.illuminated.toFixed(2)}%`,
                          `Edad: ${moonPhase.age.toFixed(2)}`,
                        ]}
                        phases={moonPhases}
                        current={moonCurrent}
                      />
                    </div>
                  )
                }

              </Row>
            </Container>
          </Section>
          <Section className="bg-light pb-50 pt-50">
            <Container>
              <Row>
                <Appear>
                  <div className="col-sm-9 col-xs-12 text-center">
                    <h2 className="mb-0">¿Situación de riesgo por lluvia? ¡Repórtalo!</h2>
                  </div>
                  <div className="col-sm-3 col-xs-12 text-center mt-mdm-20">
                    <Linked url="/reportes" className="btn btn-md btn-color rounded">
                      Explorar Riesgos
                    </Linked>
                  </div>
                </Appear>
              </Row>
            </Container>
          </Section>
          <Section className="pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row mb-20">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 bottom-line">
                      Notas informativas
                    </h2>
                  </div>
                </div>
                <div className="row flex-wrap">
                  {
                    Object.keys(NEWS_LINKS).map(key => (
                      <div key={key} className="col-md-4">
                        <blockquote className="bg-light blockquote-style-2 mb-30">
                          <div className="">
                            {key}
                          </div>
                          {
                            Object.keys(NEWS_LINKS[key]).map(obj => (
                              <div key={obj} className="mt-10">
                                <Linked
                                  newTab
                                  url={NEWS_LINKS[key][obj]}
                                  className="mt-20"
                                >
                                  {obj}
                                </Linked>
                              </div>
                            ))
                          }
                        </blockquote>
                      </div>
                    ))
                  }
                </div>
              </Appear>
            </Container>
          </Section>
          <Footer />
        </Scrollable>
      </div>
    );
  }
}

News.defaultProps = {
  mapLoading: () => {},
  setPhases: () => {},
  match: false,
};

News.propTypes = {
  forecast: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  mapLoading: PropTypes.func,
  setPhases: PropTypes.func,
  match: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

const mapStateToProps = state => ({
  forecast: state.forecast,
  esri: state.esri,
  info: state.info,
});

const mapDispatchToProps = {
  mapLoading: setLoader,
  setPhases: setEarthPhases,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);

/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageTitle from '../../atoms/page-title';
import Container from '../../atoms/container';
import Section from '../../atoms/section';
import Row from '../../atoms/row';
import Clock from '../../atoms/clock';
import Scrollable from '../../atoms/scrollable';
import Footer from '../../organisms/footer';

import Forecast from '../../organisms/forecast';
import Phase from '../../organisms/phase';

import { setLoader } from '../../../redux/actions/common';
import { setEarthPhases } from '../../../redux/actions/forecast';


class Weather extends Component {
  componentDidMount() {
    const { mapLoading, setPhases } = this.props;
    mapLoading(true);
    setTimeout(() => {
      mapLoading(false);
    }, 500);
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
        id="Weather"
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
            text={<span>Clima</span>}
            paths={paths}
          />
          <Section className="page-generic pt-20 pb-30">
            <Container>
              <Row>
                <div className="col-sm-12 mb-20">
                  {
                    forecast && (
                      <Forecast forecast={forecast} />
                    )
                  }
                </div>

                {
                  earthPhases && (
                    <div className="col-sm-6 mb-20">
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
                    <div className="col-sm-6 mb-20">
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
          <Footer />
        </Scrollable>
      </div>
    );
  }
}

Weather.defaultProps = {
  mapLoading: () => {},
  setPhases: () => {},
  match: false,
};

Weather.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

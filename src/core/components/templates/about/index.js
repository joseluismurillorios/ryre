/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageTitle from '../../atoms/page-title';
import Appear from '../../atoms/appear';
import Container from '../../atoms/container';
import Section from '../../atoms/section';
import Linked from '../../atoms/linked';

import { COMUNITY } from '../../../helpers/helper-constants';

import Footer from '../../organisms/footer';
import OwlPartners from '../../molecules/owls/partners';

import { setLoader } from '../../../redux/actions/common';

import Scrollable from '../../atoms/scrollable';

import dict from '../../../dict';
import Row from '../../atoms/row';

class AboutUs extends Component {
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
        id="AboutUs"
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
            text={<span>Nosotros</span>}
            paths={this.paths}
            aether
          />
          <Section className="pt-80 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <h2 className="text-center mb-50 mb-mdm-30 bottom-line">
                  Mesa Técnica de Riesgos y Resiliencia
                </h2>
                <div className="row" ref={(el) => { this.wow = el; }}>
                  <div
                    className="col-md-6 mb-50"
                  >
                    <div className="service-item-box text-center">
                      <h3>Misión</h3>
                      <p className="mb-0">{dict.es['us.mision']}</p>
                    </div>
                  </div>
                  <div
                    className="col-md-6 mb-50"
                  >
                    <div className="service-item-box text-center">
                      <h3>Visión</h3>
                      <p className="mb-0">{dict.es['us.vision']}</p>
                    </div>
                  </div>
                </div>
              </Appear>
            </Container>
          </Section>

          <Section className="bg-dark">
            <Container>
              <h2 className="heading relative color-white text-center mb-50">
                Instituciones Participantes
              </h2>
              <OwlPartners />
            </Container>
          </Section>

          <Section>
            <Container>
              <Appear>
                <h2 className="heading relative bottom-line text-center mb-40">
                  Integrantes de la Mesa Técnica
                </h2>
                <div className="table-wrap">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>NOMBRE</th>
                        <th>INSTITUCIÓN</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        COMUNITY.map((obj, key) => (
                          <tr key={obj.name}>
                            <th>{key + 1}</th>
                            <td>{obj.name}</td>
                            <td>{obj.role}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
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

AboutUs.defaultProps = {
  mapLoading: () => { },
  match: false,
};

AboutUs.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);

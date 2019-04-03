/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import PageTitle from '../../atoms/page-title';
import Appear from '../../atoms/appear';
import Container from '../../atoms/container';
import Section from '../../atoms/section';
import Scrollable from '../../atoms/scrollable';
import GmapIframe from '../../atoms/gmap-iframe';
import Footer from '../../organisms/footer';
import Row from '../../atoms/row';

import {
  IMPLAN_IFRAME,
  CICT_IFRAME,
  COLEARQ_IFRAME,
} from '../../../../config';

import { setLoader } from '../../../redux/actions/common';
import { IMPLAN_DIRECTORY } from '../../../helpers/helper-constants';
import assets from '../../../assets';


// import dict from '../../../dict';

class Contact extends Component {
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
        id="Contact"
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
            text={<span>Contacto</span>}
            paths={paths}
            aether
          />
          <Section className="pt-50 pb-50 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row heading">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 mt-20 bottom-line">
                      IMPLAN
                    </h2>
                    <p className="subheading style-2">Instituto Metropolitano de Planeación</p>
                  </div>
                </div>

                <GmapIframe url={IMPLAN_IFRAME} visible />

                <div className="row mt-40">
                  <div className="col-md-4 mb-40">
                    <h5 className="uppercase">Información</h5>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="esricon-home" />
                      </div>
                      <p>
                        Blvd. Cuauhtemoc No. 2340 Col. Revolución CP.22400 Tijuana, B.C.
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="esricon-mobile" />
                      </div>
                      <span>(664) 686 6241 al 45</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="esricon-contact" />
                      </div>
                      <a href="mailto:info@implantijuana.com" className="dark-link">info@implantijuana.com</a>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h5 className="uppercase">Comunícate</h5>
                    <form id="contact-form" action="#">
                      <div className="row row-16">
                        <div className="col-md-6 contact-name">
                          <input name="FormSubject" id="FormSubject" type="text" placeholder="Asunto*" />
                        </div>
                        <div className="col-md-6 contact-name">
                          <input name="FormPhone" id="FormPhone" type="tel" placeholder="Telefono*" />
                        </div>
                      </div>
                      <textarea name="FormMessage" id="FormMessage" placeholder="Mensaje*" rows={9} defaultValue="" />
                      <input type="submit" className="btn btn-lg btn-color btn-submit" value="Enviar Mensaje" id="submit-message" />
                      <div id="msg" className="message" />
                    </form>
                  </div>
                </div>
              </Appear>
            </Container>
          </Section>

          <Section className="bg-primary pt-40 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row heading">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="color-white text-center mb-30 mt-20">
                      Directorio
                    </h2>
                  </div>
                </div>
                <div className="table-wrap">
                  <table className="table table-bordered color-white d">
                    <tbody>
                      {
                        IMPLAN_DIRECTORY.map((obj, key) => (
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

          <Section className="bg-dark pb-50 pt-50">
            <Container>
              <Row>
                <Appear>
                  <div className="col-xs-12 text-center">
                    <h2 className="color-white mb-0">Tu opinión es muy importante para nosotros.</h2>
                  </div>
                </Appear>
              </Row>
            </Container>
          </Section>

          <Section className="pb-0 pt-mdm-40">
            <div className="relative">
              <div className="">
                <h2 className="text-center mb-70 mb-mdm-50">Colegios</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-12 pl-0 pr-0">
                    <div className="pricing-table bg-lighter wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
                      <div className="pricing-title">
                        <h3>Colegio de Arquitectos de Tijuana, A.C.</h3>
                      </div>
                      <div className="pricing-price">
                        <img src={assets.colearq} alt="" />
                      </div>
                      <div className="pricing-features">
                        <ul>
                          <li>Presidente, Alejandro García Cruz</li>
                          <li>colarqtj@prodigy.net.mx</li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/colearquistijuana"
                            >
                              Página
                            </a>
                          </li>
                          <li>664 634 2959</li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <GmapIframe url={COLEARQ_IFRAME} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 pl-0 pr-0">
                    <div className="pricing-table bg-lighter wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                      <div className="pricing-title">
                        <h3>Colegio de Constructores Posgraduados de Tijuana, A.C.</h3>
                      </div>
                      <div className="pricing-price">
                        <img src={assets.cocopo} alt="" />
                      </div>
                      <div className="pricing-features">
                        <ul>
                          <li>Presidente, Luis Fernando González Vergara</li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/Colegio-de-Constructores-Posgraduados-de-Tijuana-AC-190332435133673/"
                            >
                              Página
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="pricing-button">
                        <a href="#" className="btn btn-md btn-color rounded">Order Now</a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 pl-0 pr-0">
                    <div className="pricing-table bg-lighter wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                      <div className="pricing-title">
                        <h3>Colegio de Ingenieros Civiles de Tijuana, A.C.</h3>
                      </div>
                      <div className="pricing-price">
                        <img src={assets.cict} alt="" />
                      </div>
                      <div className="pricing-features">
                        <ul>
                          <li>Presidente, Gerardo Tenorio Escárcega</li>
                          <li>cicttj@gmail.com</li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/colegiodeingenieroscivilesdetijuanaac/"
                            >
                              Página
                            </a>
                          </li>
                          <li>664 634 1815</li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <GmapIframe url={CICT_IFRAME} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax" data-stellar-background-ratio="0.5" />
          </Section>
          <Footer />
        </Scrollable>
      </div>
    );
  }
}

Contact.defaultProps = {
  mapLoading: () => { },
  match: false,
};

Contact.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

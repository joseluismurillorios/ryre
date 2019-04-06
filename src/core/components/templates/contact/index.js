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
import ContactCard from '../../atoms/contact-card';

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

  render() {
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
            paths={this.paths}
            aether
          />
          <Section className="pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 bottom-line">
                      Instituto Metropolitano de Planeación
                    </h2>
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

          <Section className="bg-primary pt-80 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row heading">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="color-white text-center mb-30 mt-0">
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
            <Appear className="relative">
              <h2 className="text-center mb-70 mb-mdm-50">Colegios</h2>
              <div className="row">
                <ContactCard
                  img={assets.colearq}
                  gmap={COLEARQ_IFRAME}
                  className="col-lg-4 col-md-12 pl-0 pr-0"
                  name="Colegio de Arquitectos de Tijuana, A.C."
                  director="Alejandro García Cruz"
                  mail="colarqtj@prodigy.net.mx"
                  link="https://www.facebook.com/colearquistijuana"
                  phone="664 634 2959"
                />
                <ContactCard
                  img={assets.cocopo}
                  className="col-lg-4 col-md-12 pl-0 pr-0"
                  name="Colegio de Constructores Posgraduados de Tijuana, A.C."
                  director="Luis Fernando González Vergara"
                  link="https://www.facebook.com/Colegio-de-Constructores-Posgraduados-de-Tijuana-AC-190332435133673/"
                  color="light"
                />
                <ContactCard
                  img={assets.colearq}
                  gmap={CICT_IFRAME}
                  className="col-lg-4 col-md-12 pl-0 pr-0"
                  name="Colegio de Ingenieros Civiles de Tijuana, A.C."
                  director="Gerardo Tenorio Escárcega"
                  mail="cicttj@gmail.com"
                  link="https://www.facebook.com/colegiodeingenieroscivilesdetijuanaac/"
                  phone="664 634 1815"
                />
              </div>
            </Appear>
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

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  mapLoading: setLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

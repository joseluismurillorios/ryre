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

import { setLoader } from '../../../redux/actions/common';
import { EXTERNAL_LINKS } from '../../../helpers/helper-constants';


// import dict from '../../../dict';

class Links extends Component {
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

  render() {
    return (
      <div
        id="Links"
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
            text={<span>Links</span>}
            paths={this.paths}
            aether
          />
          <Section className="pt-50 pb-80 pt-mdm-30">
            <Container>
              <Appear>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h2 className="text-center mb-30 bottom-line">
                      Links a páginas externas
                    </h2>
                  </div>
                  <div className="table-wrap">
                    <table className="table table-bordered color-white d">
                      <tbody>
                        {
                          EXTERNAL_LINKS.body.map((obj, key) => (
                            <tr key={obj[1]}>
                              <th>{key + 1}</th>
                              <td>{obj[0]}</td>
                              <td>{obj[1]}</td>
                              <td>{obj[2]}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
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
                        EXTERNAL_LINKS.body.map((obj, key) => (
                          <tr key={obj[1]}>
                            <th>{key + 1}</th>
                            <td>{obj[0]}</td>
                            <td>{obj[1]}</td>
                            <td>{obj[2]}</td>
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
          <Footer />
        </Scrollable>
      </div>
    );
  }
}

Links.defaultProps = {
  mapLoading: () => { },
  match: false,
};

Links.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Links);

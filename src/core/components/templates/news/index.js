/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import PageTitle from '../../atoms/page-title';
// import $ from '../../../helpers/helper-jquery';

import Footer from '../../organisms/footer';

import { setLoader } from '../../../redux/actions/common';

import Scrollable from '../../atoms/scrollable';

class News extends Component {
  componentDidMount() {
    const { mapLoading } = this.props;
    mapLoading(false);
    // const innerDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;

    // const ulObj = innerDoc.getElementById('form1');
    // console.log(innerDoc, ulObj);

    // this.iframe.addEventListener('load', () => {
    //   window.frames[0].document.body.style.backgroundColor = '#f00';
    // });
  }

  render() {
    const { match } = this.props;
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
        >
          <PageTitle
            text={<span>Noticias</span>}
            paths={paths}
            aether
          />
          <iframe
            ref={(el) => { this.iframe = el; }}
            style={{
              width: '100%',
              height: '1080px',
              padding: '100px',
            }}
            title="noticias"
            src="http://www.tijuana.gob.mx/webpanel/comunicado/comunicadolistado.aspx?siddependencia=12"
            frameBorder="0"
          />
          <Footer />
        </Scrollable>
      </div>
    );
  }
}

News.defaultProps = {
  mapLoading: () => {},
  match: false,
};

News.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(News);

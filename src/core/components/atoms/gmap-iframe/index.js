/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../loader';

import $ from '../../../helpers/helper-jquery';

class GmapIframe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: true,
      loaded: false,
    };
    this.onLoad = this.onLoad.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
  }

  componentDidMount() {
    $('.mfp-pop').magnificPopup({
      type: 'iframe',
      disableOn: () => {
        if ($(window).width() < 992) {
          return false;
        }
        return true;
      },
    });
  }

  onLoad() {
    this.setState({
      loaded: true,
    });
  }

  toggleMap() {
    const { isHide } = this.state;
    this.setState({
      isHide: !isHide,
    });
  }

  render() {
    const { url, visible } = this.props;
    const { isHide, loaded } = this.state;
    const isVisible = (!isHide || visible);
    const opened = isVisible ? 'opened' : '';
    // console.log(isHide, url);
    return (
      <div style={{ overflow: 'hidden', flexDirection: 'column' }}>
        {
          !visible && (
            <div className={`gmap-btns flex-center ${opened}`}>
              <button type="button" className="flex-center" onClick={this.toggleMap}>
                {isHide ? 'Ver Mapa' : 'Ocultar Mapa'}
                <i className={`implanf-visibility${!isHide ? '_off' : ''} ml-10`} />
              </button>
              <a target="_blank" href={url} className="mfp-pop flex-center">
                <i className="implanf-crop_free" />
              </a>
            </div>
          )
        }
        <div className={`gmap gmap-hidden ${opened}`}>
          {
            (!loaded) && (
              <Loader className="gmap bg-light" />
            )
          }
          {
            (isVisible || loaded) && (
              <iframe
                title="implan"
                width="100%"
                height={400}
                src={url}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                onLoad={this.onLoad}
              />
            )
          }
        </div>
      </div>
    );
  }
}

GmapIframe.defaultProps = {
  visible: false,
};

GmapIframe.propTypes = {
  url: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default GmapIframe;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Loader from '../loader';

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

  onLoad() {
    console.log('loaded');
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
    const opened = (!isHide || visible) && loaded ? 'opened' : '';
    // console.log(isHide, url);
    return (
      <div style={{ overflow: 'hidden' }}>
        {
          !visible && (
            <button type="button" className={`gmap-btn flex-center ${opened}`} onClick={this.toggleMap}>
              <h6 className="mt-20 mb-20">
                {isHide ? 'Ver Mapa' : 'Ocultar Mapa'}
                <i className={`implanf-visibility${!isHide ? '_off' : ''} ml-10`} />
              </h6>
            </button>
          )
        }
        {/* {
          (!loaded) && (
            <Loader className="gmap bg-light" />
          )
        } */}
        <div className={`gmap gmap-hidden ${opened}`}>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  onAuthChange,
  authLogin,
  authLogout,
  userLogin,
} from './redux/actions/common/async';

import {
  hideInstallMessage,
} from './redux/actions/common';

import {
  onWeatherChange,
  onForecastChange,
  // getReports,
} from './redux/actions/forecast/async';


import {
  debounce,
  isIOS,
  isInStandaloneMode,
  isIOSChrome,
} from './helpers/helper-util';

import CloseButton from './components/atoms/close';
import Top from './components/atoms/top';
import Loader from './components/atoms/loader';
import Button from './components/atoms/button';
import AddHome from './components/molecules/addhome';
import Modal from './components/molecules/modal';
import Header from './components/organisms/header';
import { ROUTES } from './components/templates';
// import Header from './components/organisms/header/type4';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      showInstallMessage: (isIOS && !isInStandaloneMode() && !isIOSChrome && !(window.cordova)),
      isStandalone: isIOS && (isInStandaloneMode() || !!(window.cordova)),
      email: '',
      password: '',
    };

    this.toggleMenu = this.toggleMenu.bind(this);

    this.setHeaderRef = this.setHeaderRef.bind(this);
    this.debouncedResize = debounce(this.debouncedResize.bind(this), 200);

    this.handleText = this.handleText.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    const {
      authChange,
      // getForecast,
      // getWeather,
      onWeather,
      onForecast,
    } = this.props;
    const { isStandalone } = this.state;
    if (isStandalone) {
      document.body.classList.add('isStandalone');
      const root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)

      root.classList.add('class', 'isStandalone');
    }
    window.addEventListener('resize', this.debouncedResize, false);
    window.dispatchEvent(new Event('resize'));
    const rectHeader = this.header.getBoundingClientRect();
    const { height } = rectHeader;
    this.setState({ top: height });
    authChange();
    // getForecast();
    // getWeather();
    onWeather();
    onForecast();
    // getReports();
  }

  setHeaderRef(header) {
    this.header = header;
  }

  debouncedResize() {
    const head = this.header;
    setTimeout(() => {
      if (head) {
        const rectHeader = head.getBoundingClientRect();
        const { height } = rectHeader;
        this.setState({ top: height });
      }
    }, 100);
  }

  toggleMenu() {
    const { menuOpened } = this.state;
    this.setState({ menuOpened });
  }

  handleText(v) {
    this.setState({ [v.name]: v.value });
  }

  login() {
    const { loginUser } = this.props;
    const { email, password } = this.state;
    loginUser(email, password);
  }

  render() {
    const {
      common,
      children,
      loginAuth,
      logout,
      hideMessage,
    } = this.props;
    const {
      top,
      isStandalone,
      showInstallMessage,
    } = this.state;
    // console.log(common.user);
    return (
      <div id="Layout" className="app__layout full">
        <Header
          setRef={this.setHeaderRef}
          isStandalone={isStandalone}
          login={loginAuth}
          logout={logout}
          user={common.user}
          routes={ROUTES}
        />
        <section
          id="Router"
          className="app__router fill"
          style={{ top }}
        >
          {children}
        </section>

        <ToastContainer
          autoClose={10000}
          closeButton={<CloseButton className="implanf-close toast-close" />}
          transition={Zoom}
          toastClassName="toast"
        />

        {
          common.loading
          && <Loader style={{ top }} />
        }
        {
          showInstallMessage && common.showInstallMessage && (
            <AddHome id="addhome" onClick={hideMessage} />
          )
        }

        <Top />

        <Modal.Container id="Login">
          <Modal.Header text="Entrar" />
          <Modal.Footer>
            <div className="flex-center">
              <Button id="gmail" color="danger" size="sm" onTap={loginAuth}>
                Continuar con
                <span className="implanf-google ml-10 mr-10" />
                Gmail
              </Button>
            </div>
          </Modal.Footer>
        </Modal.Container>
      </div>
    );
  }
}

Layout.defaultProps = {
  authChange: () => {},
  loginAuth: () => {},
  loginUser: () => {},
  logout: () => {},
  // getForecast: () => {},
  // getWeather: () => {},
  onWeather: () => {},
  onForecast: () => {},
  hideMessage: () => {},
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  common: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  authChange: PropTypes.func,
  loginAuth: PropTypes.func,
  loginUser: PropTypes.func,
  logout: PropTypes.func,
  // getForecast: PropTypes.func,
  // getWeather: PropTypes.func,
  onWeather: PropTypes.func,
  onForecast: PropTypes.func,
  hideMessage: PropTypes.func,
};

const mapStateToProps = state => ({
  common: state.common,
});

const mapDispatchToProps = {
  authChange: onAuthChange,
  loginAuth: authLogin,
  loginUser: userLogin,
  logout: authLogout,
  // getForecast: getForecastMetric,
  // getWeather: getWeatherMetric,
  onWeather: onWeatherChange,
  onForecast: onForecastChange,
  hideMessage: hideInstallMessage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

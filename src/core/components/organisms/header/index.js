/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import $ from '../../../helpers/helper-jquery';
import { debounce } from '../../../helpers/helper-util';

import { CAMINAPP_URL } from '../../../../config';

import assets from '../../../assets';

// import Logo from '../../atoms/logo';
import Button from '../../atoms/button';
import NavItem from './nav-item';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.getTemp = this.getTemp.bind(this);
    this.debouncedSearch = debounce(this.debouncedSearch.bind(this), 1000);

    const { routes } = this.props;
    this.router = routes.map((path, i) => (
      <li
        key={path.url !== '#' ? path.url : i}
        className={path.items.length ? 'dropdown' : ''}
      >
        {
          path.items.length
            ? (
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">{path.name}</a>
            )
            : (
              <NavItem
                key={path.url}
                exact
                to={path.url}
                onClick={() => {
                  $('#MainScroll').scrollTop(0);
                }}
              >
                {path.name}
              </NavItem>
            )
        }
        {
          !!(path.items.length) && (
            <ul className="dropdown-menu">
              {
                path.items.map(sub => (
                  <li key={sub.url}>
                    <NavItem
                      key={sub.url}
                      exact
                      to={sub.url}
                      onClick={() => {
                        $('#MainScroll').scrollTop(0);
                      }}
                    >
                      {sub.name}
                    </NavItem>
                  </li>
                ))
              }
            </ul>
          )
        }
      </li>
    ));
  }

  componentDidMount() {
    $(window).on('resize', () => {
      $('.navbar-collapse').collapse('hide');
    });

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', (data) => {
      $(data.target).find('.dropdown-menu').first().stop(true, true)
        .slideDown('fast');
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', (e) => {
      $(e.target).find('.dropdown-menu').first().stop(true, true)
        .slideUp('fast');
    });

    $(document).click((e) => {
      const clickover = $(e.target);
      const opened = $('.navbar-collapse').hasClass('collapse in');
      if (opened === true
        && !clickover.hasClass('navbar-toggle')
        && !clickover.hasClass('dropdown-toggle')
        && !clickover.hasClass('form-control')) {
        $('button.navbar-toggle').click();
      }
    });

    $('.search-wrap, .trigger-search').on('click', (e) => {
      e.stopPropagation();
    });
  }

  onSearch(e) {
    this.searchTerm = e.target.value;
    this.debouncedSearch();
  }

  getTemp() {
    const { forecast } = this.props;
    if (forecast.weatherMetric) {
      const { weatherMetric } = forecast;
      if (weatherMetric.main) {
        const { main } = weatherMetric;
        const { temp } = main;
        return {
          temp,
        };
      }
    }

    return {
      temp: false,
    };
  }

  debouncedSearch() {
    const { searchItems } = this.props;
    searchItems({ searchTerm: this.searchTerm });
  }

  render() {
    const {
      setRef,
      isStandalone,
      login,
      logout,
      user,
    } = this.props;
    const { temp } = this.getTemp();
    const userObj = (user && user.email) ? (user.displayName || user.email) : 'Invitado';
    const userName = userObj.split(' ')[0].split('@')[0];
    return (
      <header
        className="nav-type-3"
        ref={setRef}
        id="Header"
      >
        {
          isStandalone && (
            <div className="app__statusbar" />
          )
        }
        <nav className="navbar navbar-static-top">
          <div className="navigation">
            <div className="container relative">
              <div className="row">
                <div className="navbar-header">
                  {
                    temp && (
                      <NavItem
                        className="cart-temp right hidden-lg hidden-md"
                        exact
                        to="/noticias"
                        onClick={() => {
                          $('#MainScroll').scrollTop(0);
                        }}
                      >
                        {temp}
                        °
                        <small> C</small>
                      </NavItem>
                    )
                  }
                  <div className="nav-cart mobile-cart right hidden-lg hidden-md">
                    <div className="cart-outer">
                      <div className="cart-inner">
                        <i className="implanf-person" />
                      </div>
                    </div>
                  </div>
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="header-wrap col-md-12">

                  <div className="nav-search type-2 hidden-sm hidden-xs">
                    {/* <form method="get">
                      <input type="search" className="form-control" placeholder="Buscar" />
                      <button type="submit" className="search-button">
                        <i className="implanf-search" />
                      </button>
                    </form> */}
                    <a href={CAMINAPP_URL} className="btn btn-sm rounded btn-color mr-10">Caminapp</a>

                    <NavItem
                      className="btn btn-sm rounded"
                      exact
                      to="/reportes"
                      onClick={() => {
                        $('#MainScroll').scrollTop(0);
                      }}
                    >
                      Reportes
                    </NavItem>
                  </div>

                  <div className="logo-container">
                    <div className="logo-wrap text-center">
                      <NavItem
                        exact
                        to="/inicio"
                        onClick={() => {
                          $('#MainScroll').scrollTop(0);
                        }}
                      >
                        {/* <Logo /> */}
                        <img src={assets.navbarSmall} alt="Ryre Web" />
                      </NavItem>
                    </div>
                  </div>

                  <div className="nav-cart-wrap style-2 hidden-sm hidden-xs">
                    {
                      temp && (
                        <div className="nav-cart right">
                          <NavItem
                            className="cart-temp right"
                            exact
                            to="/noticias"
                            onClick={() => {
                              $('#MainScroll').scrollTop(0);
                            }}
                          >
                            {temp}
                            °
                            <small> C</small>
                          </NavItem>
                        </div>
                      )
                    }
                    <div className="nav-cart right">
                      <div className="nav-cart-ammount">
                        <span>{userName}</span>
                      </div>
                      <div className="cart-outer right">
                        <div className="cart-inner">
                          <i className="implanf-person" />
                        </div>
                      </div>
                      <div className="nav-cart-container">
                        <div className="nav-cart-actions">
                          {
                            user && user.email
                              ? (
                                <Button color="red" size="md" onTap={logout}>
                                  Salir
                                </Button>
                              )
                              : (
                                <Button color="primary" size="md" onTap={login}>
                                  Entrar
                                  <span className="implanf-google ml-10" />
                                </Button>
                              )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 nav-wrap">
                  <div className="collapse navbar-collapse" id="navbar-collapse" style={{ maxHeight: '910px' }}>
                    <ul className="nav navbar-nav">
                      {
                        this.router
                      }

                      {/* <li id="mobile-search" className="hidden-lg hidden-md">
                        <form method="get" className="mobile-search relative">
                          <input type="search" className="form-control" placeholder="Buscar..." />
                          <button type="submit" className="search-button">
                            <i className="icon icon_search" />
                          </button>
                        </form>
                      </li> */}

                      <li className="dropdown hidden-lg hidden-md">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span className="implanf-person mr-10" />
                          {userName}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            {
                              user && user.email
                                ? (
                                  <a href="/" onClick={logout} className="uppercase error-text">
                                    Salir
                                  </a>
                                )
                                : (
                                  <a href="#" onClick={login} className="uppercase">
                                    Entrar
                                    <span className="implanf-google ml-10" />
                                  </a>
                                )
                            }
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

    );
  }
}

NavBar.defaultProps = {
  searchItems: () => {},
  setRef: () => {},
  login: () => {},
  logout: () => {},
  isStandalone: false,
  user: false,
};

NavBar.propTypes = {
  forecast: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  searchItems: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
  setRef: PropTypes.func,
  isStandalone: PropTypes.bool,
  routes: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

const mapStateToProps = state => ({
  router: state.router,
  forecast: state.forecast,
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from '../../../helpers/helper-jquery';

import NavItem from '../header/nav-item';

class WidgetSite extends Component {
  constructor(props) {
    super(props);
    const { routes } = this.props;
    this.router = routes.map((path, i) => (
      <li key={path.url !== '#' ? path.url : i} className="dropdown">
        <NavItem
          key={path.url}
          exact
          to={path.url}
          onClick={() => {
            $('#MainScroll').animate({ scrollTop: 0 }, 800, 'easeInOutQuart');
          }}
        >
          {path.name}
        </NavItem>
      </li>
    ));
  }

  render() {
    return (
      <div className="widget categories">
        <h2 className="heading relative heading-small uppercase bottom-line style-2 left-align mb-0">
          Sitio
        </h2>
        <ul className="list-dividers">
          {
            this.router
          }
        </ul>
      </div>
    );
  }
}

WidgetSite.defaultProps = {
};

WidgetSite.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default WidgetSite;

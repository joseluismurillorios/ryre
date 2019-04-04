import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import $ from '../../../helpers/helper-jquery';

const Link = ({
  url,
  className,
  children,
  history,
  newTab,
}) => (
  <a
    href={url}
    target={newTab ? '_blank' : '_self'}
    className={className}
    rel={newTab ? 'noopener noreferrer' : ''}
    onClick={(e) => {
      if (!newTab) {
        history.push(url);
        $('#MainScroll').scrollTop(0);
        e.preventDefault();
      }
    }}
  >
    {children}
  </a>
);

Link.defaultProps = {
  className: '',
  url: '#',
  newTab: false,
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  url: PropTypes.string,
  newTab: PropTypes.bool,
};

export default withRouter(Link);

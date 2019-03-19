import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import $ from '../../../helpers/helper-jquery';

const Link = ({
  url,
  className,
  children,
  history,
}) => (
  <a
    href={url}
    className={className}
    onClick={(e) => {
      history.push(url);
      $('#MainScroll').scrollTop(0);
      e.preventDefault();
    }}
  >
    {children}
  </a>
);

Link.defaultProps = {
  className: '',
  url: '#',
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  url: PropTypes.string,
};

export default withRouter(Link);

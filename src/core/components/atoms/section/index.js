import React from 'react';
import PropTypes from 'prop-types';


const Section = ({ className, children }) => (
  <section
    className={`section-wrap ${className}`}
  >
    {children}
  </section>
);

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  className: PropTypes.string,
};

export default Section;

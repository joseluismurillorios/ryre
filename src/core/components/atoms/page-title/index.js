import React from 'react';
import PropTypes from 'prop-types';

import Linked from '../link';

import { isMobile } from '../../../helpers/helper-util';

const PageTitle = ({ text, paths }) => (
  <section className={`page-title ${isMobile ? 'title-sm' : ''} text-center`}>
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">{text}</h1>
          <ol className="breadcrumb">
            {
              paths
              && paths.map(path => (
                <li key={`/${path}`}>
                  <Linked url={`/${path}`}>
                    {path.split('-').join(' ')}
                  </Linked>
                </li>
              ))
            }
            <li className="active">
              <span>{text}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

PageTitle.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.any).isRequired,
  text: PropTypes.element.isRequired,
};

export default PageTitle;

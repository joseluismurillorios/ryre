/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const renderText = info => (
  <div className="col-md-6 promo-descr pr-20">
    {
      info.map(obj => (
        <div key={obj.key}>
          {
            obj.title && (
              <h3 className="heading relative uppercase bottom-line left-align">{obj.title}</h3>
            )
          }
          {
            obj.paragraphs && (
              obj.paragraphs.map((p, i) => (
                <p key={`card-p-${obj.key}-${i}`} className="card-description">
                  {p}
                </p>
              ))
            )
          }
        </div>
      ))
    }
  </div>
);

const renderImg = (img, left) => (
  <div className="col-md-6 text-center mb-mdm-60">
    <img src={img} alt="" className={`wow fadeIn${left ? 'Left' : 'Right'}`} data-wow-duration="1s" data-wow-delay=".2s" />
  </div>
);

const Card = ({
  id,
  className,
  img,
  info,
  left,
}) => (
  <div id={id} className={className}>
    {
      left ? renderImg(img, left) : renderText(info)
    }
    {
      left ? renderText(info) : renderImg(img, left)
    }
  </div>
);

Card.defaultProps = {
  id: '',
  className: '',
  img: '',
  left: false,
  info: [],
};

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  img: PropTypes.string,
  left: PropTypes.bool,
  info: PropTypes.arrayOf(
    PropTypes.any,
  ),
};

export default Card;

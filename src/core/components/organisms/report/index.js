/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import PropTypes from 'prop-types';

import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';
import Scrollable from '../../atoms/scrollable';
// import Icons from '../../molecules/icons';

import { CATEGORIES } from '../../../helpers/helper-constants';

import assets from '../../../assets';

const Report = ({
  onChange,
  onToggle,
  onSubmit,
  opened,
  opinion,
  errors,
}) => {
  const categories = Object.keys(CATEGORIES).map((el) => {
    const cat = {};
    cat.id = el;
    cat.name = CATEGORIES[el].name;
    return cat;
  });
  let subcategories = false;
  if (opinion.category !== '') {
    const sub = CATEGORIES[opinion.category].items;
    subcategories = Object.keys(sub).map((el) => {
      const cat = {};
      cat.id = el;
      cat.name = sub[el].name;
      return cat;
    });
  }


  let types = false;
  // console.log(opinion);
  if (opinion.category !== '' && opinion.subcategory !== '') {
    const typ = CATEGORIES[opinion.category].items[opinion.subcategory].items;
    types = Object.keys(typ).map((el) => {
      const cat = {};
      cat.id = el;
      cat.name = typ[el];
      return cat;
    });
  }
  return (
    <div className={`fs-menu ${opened ? 'open' : ''}`} id="overlay">
      <Scrollable className="overlay-menu row">
        <div className="col-sm-12 col-md-6 col-md-offset-3 mb-10 mt-30">
          <div className="title uppercase">Categoría</div>
          <sup
            className={errors.category ? 'error-text' : ''}
          >
            {errors.category ? 'Necesitas seleccionar una categoría' : 'Seleccionar'}
          </sup>
          <div className="list-item" style={{ animationDelay: '0.1s' }}>
            {
              categories.map(cat => (
                <Button
                  className="icon-box"
                  color="icon"
                  name="category"
                  onTap={onChange}
                  value={cat.id}
                  key={cat.id}
                >
                  <div className={`service-item-box category ${opinion.category === cat.id ? 'selected' : ''}`}>
                    <img className="icon" src={assets[cat.name]} alt="" />
                    {/* <Icons name={cat.name} /> */}
                    <span>{cat.name}</span>
                  </div>
                </Button>
              ))
            }
          </div>
        </div>
        {
          subcategories
          && (
            <div className="col-sm-12 col-md-6 col-md-offset-3 mb-10">
              <div className="title uppercase">Subcategoría</div>
              <sup
                className={errors.subcategory ? 'error-text' : ''}
              >
                {errors.subcategory ? 'Necesitas seleccionar una subcategoría' : 'Seleccionar'}
              </sup>
              <div className="list-item" style={{ animationDelay: '0.1s' }}>
                {
                  subcategories.map(sub => (
                    <Button
                      className="icon-box"
                      color="icon"
                      name="subcategory"
                      onTap={onChange}
                      value={sub.id}
                      key={sub.id}
                    >
                      <div className={`service-item-box subcategory ${opinion.subcategory === sub.id ? 'selected' : ''}`}>
                        <img className="icon" src={assets[sub.name]} alt="" />
                        {/* <Icons name={sub.name} /> */}
                        <span>{sub.name}</span>
                      </div>
                    </Button>
                  ))
                }
              </div>
            </div>
          )
        }
        {
          types
          && (
            <div className="col-sm-12 col-md-6 col-md-offset-3 mb-10">
              <div className="list-item" style={{ animationDelay: '0.1s' }}>
                <div className="title uppercase">Detalles</div>
                <sup className={errors.message ? 'error-text' : ''}>
                  Tu información es muy importante para nosotros
                </sup>
                <Textarea
                  id="message"
                  placeholder="Mensaje*"
                  className={`mb-0 ${errors.message ? 'has-error' : ''}`}
                  rows="3"
                  onChange={onChange}
                  value={opinion.message}
                />
                <div className="description_tips mt-20">
                  <div className="do">
                    <p>
                      <span className="implanf-checkmark mr-10" />
                      Sea cortés
                    </p>
                    <p>
                      <span className="implanf-checkmark mr-10" />
                      Use ubicaciones exactas
                    </p>
                  </div>
                  <div className="dont">
                    <p>
                      <span className="implanf-close mr-10" />
                      No identifique o acuse a otras personas
                    </p>
                    <p>
                      <span className="implanf-close mr-10" />
                      No incluya datos privados de ningún tipo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        <div className="col-sm-12 col-md-6 col-md-offset-3 mb-50">
          <div className="list-item" style={{ animationDelay: '0.3s' }}>
            <div>
              <Button
                onTap={onToggle}
                color="dark"
                className="mt-10 mr-10"
                size="sm"
              >
                Cambiar
                <span className="implanf-pin ml-10" />
              </Button>
              <Button
                onTap={onSubmit}
                color="primary"
                className="mt-10"
                size="sm"
              >
                Enviar
                <span className="implanf-navigation-2 ml-10" />
              </Button>
            </div>
          </div>
        </div>
      </Scrollable>
    </div>
  );
};

Report.defaultProps = {
  errors: {},
  onChange: () => { },
  onToggle: () => { },
  onSubmit: () => { },
  opened: false,
};

Report.propTypes = {
  opinion: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  errors: PropTypes.objectOf(
    PropTypes.any,
  ),
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
  onSubmit: PropTypes.func,
  opened: PropTypes.bool,
};


export default Report;

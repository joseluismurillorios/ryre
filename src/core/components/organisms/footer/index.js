import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ id }) => (
  <footer id={id} className="footer footer-type-4">
    <div className="container">
      <div className="footer-widgets">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="widget footer-get-in-touch">
              <h5 className="uppercase">Dirección</h5>
              <p className="footer-address">Blvd. Cuauhtemoc No. 2340<br /> Col. Revolución Tijuana B.C. CP.22400 </p>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="widget footer-get-in-touch">
              <h5 className="uppercase">Contácto</h5>
              <p>Tel: (664) 686 6241 al 45</p>
              <p>Email: <a href="mailto:info@implantijuana.com">info@implantijuana.com</a></p>
              <p>Fax: (664) 686-62-49</p>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="widget footer-links small-space">
              <h5 className="uppercase">Links</h5>
              <ul>
                <li><a href="http://implan.tijuana.gob.mx/">IMPLAN</a></li>
                <li><a href="http://www.sitt.tijuana.gob.mx/">SITT</a></li>
                <li><a href="http://www.impac.tijuana.gob.mx/">IMPAC</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 copyright">
            <span>
              2019 IMPLAN
            </span>
          </div>
          <div className="col-md-6 col-xs-12 footer-socials mt-mdm-10 text-right">
            <ul className="bottom-footer-links style-2">
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#/contacto">Contácto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {
  id: '',
};

Footer.propTypes = {
  id: PropTypes.string,
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import {
  CATEGORIES,
  TYPES,
} from '../../../helpers/helper-constants';

import Card from '../card';

const Attrs = ({
  showInfo,
  info,
  zoomOut,
  zoomIn,
  toggle,
  user,
  deleteReport,
  isAdmin,
}) => {
  const {
    address = '',
    position = {},
    category = 3,
    subcategory = 0,
    type = 1000,
  } = info;
  const { geopoint = {} } = position;
  const { _lat: latitude, _long: longitude } = geopoint;
  const canEdit = isAdmin || user.uid === info.user;
  return (
    <CSSTransition
      in={showInfo}
      timeout={200}
      classNames="fast"
      unmountOnExit
    >
      <Card.Container id="Attrs">
        <Card.Header
          text={TYPES[type]}
          toggle={toggle}
        />
        <Card.Body>
          <table className="esri-widget__table mb-10" summary="Lista de atributos y valores">
            <tbody>
              {
                address
                && (
                  <tr>
                    <th className="esri-feature__field-header">Dirección</th>
                    <td className="esri-feature__field-data">{address}</td>
                  </tr>
                )
              }
              <tr>
                <th className="esri-feature__field-header">Categoría</th>
                <td className="esri-feature__field-data">{CATEGORIES[category].name}</td>
              </tr>
              <tr>
                <th className="esri-feature__field-header">Subategoría</th>
                <td className="esri-feature__field-data">{CATEGORIES[category].items[subcategory].name}</td>
              </tr>
              {
                geopoint
                && (
                  <tr>
                    <th className="esri-feature__field-header">Latitud</th>
                    <td className="esri-feature__field-data">
                      {latitude}
                    </td>
                  </tr>
                )
              }
              {
                geopoint
                && (
                  <tr>
                    <th className="esri-feature__field-header">Longitud</th>
                    <td className="esri-feature__field-data">
                      {longitude}
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </Card.Body>
        <Card.Footer
          zoomOut={zoomOut}
          zoomIn={zoomIn}
          canEdit={canEdit}
          deleteReport={() => { deleteReport(info.user, info.id); }}
        />
      </Card.Container>
    </CSSTransition>
  );
};


Attrs.defaultProps = {
  showInfo: false,
  info: {},
  user: {},
  zoomOut: () => {},
  zoomIn: () => {},
  toggle: () => {},
  isAdmin: false,
  deleteReport: () => { console.log('deleting...'); },
};

Attrs.propTypes = {
  showInfo: PropTypes.bool,
  info: PropTypes.objectOf(
    PropTypes.any,
  ),
  user: PropTypes.objectOf(
    PropTypes.any,
  ),
  zoomOut: PropTypes.func,
  zoomIn: PropTypes.func,
  toggle: PropTypes.func,
  isAdmin: PropTypes.bool,
  deleteReport: PropTypes.func,
};

export default Attrs;

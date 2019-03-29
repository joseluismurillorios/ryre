import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/button';

const ControlsRight = ({
  tooltip,
  showTooltip,
  hasAddress,
  hasGeolocation,
  createOpinion,
  getLocation,
  zoomOut,
  zoomIn,
  onMouseLeave,
}) => (
  <div
    className="map-menu fixed-right-bottom"
    onMouseLeave={() => { onMouseLeave({ tooltip: '' }); }}
  >
    {
      hasAddress
      && (
        <Button
          onTap={createOpinion}
          color="primary"
          onMouseMove={() => { onMouseLeave({ tooltip: 'add' }); }}
        >
          <span className="implanf-add_location" />
          {
            (showTooltip && tooltip === 'add')
            && <span className="map-tooltip-left">Agregar proyecto</span>
          }
        </Button>
      )
    }
    <Button
      onTap={zoomIn}
      color="light"
      onMouseMove={() => { onMouseLeave({ tooltip: 'zoomin' }); }}
    >
      <span className="implanf-add" />
      {
        (showTooltip && tooltip === 'zoomin')
        && <span className="map-tooltip-left">Acercar mapa</span>
      }
    </Button>
    <Button
      onTap={zoomOut}
      color="light"
      onMouseMove={() => { onMouseLeave({ tooltip: 'zoomout' }); }}
    >
      <span className="implanf-remove" />
      {
        (showTooltip && tooltip === 'zoomout')
        && <span className="map-tooltip-left">Alejar mapa</span>
      }
    </Button>
    {
      hasGeolocation
      && (
        <Button
          onTap={getLocation}
          onMouseMove={() => { onMouseLeave({ tooltip: 'myloc' }); }}
          color="light"
        >
          <span className="implanf-my_location" />
          {
            (showTooltip && tooltip === 'myloc')
            && <span className="map-tooltip-left">Mi ubicación</span>
          }
        </Button>
      )
    }
  </div>
);

ControlsRight.defaultProps = {
  tooltip: '',
  hasGeolocation: false,
  showTooltip: false,
  hasAddress: false,
  createOpinion: () => {},
  getLocation: () => {},
  zoomOut: () => {},
  zoomIn: () => {},
  onMouseLeave: () => {},
};

ControlsRight.propTypes = {
  tooltip: PropTypes.string,
  hasGeolocation: PropTypes.bool,
  showTooltip: PropTypes.bool,
  hasAddress: PropTypes.bool,
  createOpinion: PropTypes.func,
  getLocation: PropTypes.func,
  zoomOut: PropTypes.func,
  zoomIn: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default ControlsRight;

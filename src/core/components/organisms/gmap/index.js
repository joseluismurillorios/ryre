import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { loadScript, circleMarker, styles } from '../../../helpers/helper-gmap';

// import { getOpinions } from '../../../redux/actions/common/async';

import {
  COLORS,
  TIJUANA,
} from '../../../helpers/helper-constants';

import { GOOGLE_API_KEY } from '../../../../config';

import {
  isIOS,
  isMobile,
} from '../../../helpers/helper-util';

import Button from '../../atoms/button';
import Attrs from '../../molecules/attrs';

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: {},
      showProps: false,
      showHelp: false,
      zoom: isMobile ? 11 : 12,
      mapType: 'roadmap',
      tooltip: '',
      showDataLayer: true,
      hasFeatures: false,
    };
    this.getLocation = this.getLocation.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleFeatClick = this.handleFeatClick.bind(this);
    this.showLocation = this.showLocation.bind(this);
    this.showError = this.showError.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.initGMap = this.initGMap.bind(this);
    this.loading = this.loading.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.goTo = this.goTo.bind(this);
    this.reverseGeocode = this.reverseGeocode.bind(this);
    this.reset = this.reset.bind(this);
    this.createOpinion = this.createOpinion.bind(this);
    this.toggleShowHelp = this.toggleShowHelp.bind(this);
    this.hideShowHelp = this.hideShowHelp.bind(this);
    this.toggleMapType = this.toggleMapType.bind(this);
    this.renderFeatures = this.renderFeatures.bind(this);
    this.toggleDataLayer = this.toggleDataLayer.bind(this);

    this.featureSelected = false;
    this.searching = false;

    this.isIOS = isIOS();
  }

  componentDidMount() {
    if (window.google) {
      this.initGMap();
    } else {
      this.renderMap();
    }

    this.help.addEventListener('click', this.hideShowHelp);
    // this.menu.addEventListener('click', this.hideShowHelp);
  }

  componentDidUpdate(prevProps) {
    const { geo } = this.props;
    this.hasFeatures = !!(geo.features && geo.features.length > 0);
    if (this.hasFeatures && this.gmap) {
      const hasPrevFeatures = !!(prevProps.geo.features);
      if (hasPrevFeatures && geo.features.length !== prevProps.geo.features.length) {
        console.log('new data');
        this.renderFeatures(geo);
      }
    }
  }

  componentWillUnmount() {
    this.help.removeEventListener('click', this.hideShowHelp);
    // this.menu.removeEventListener('click', this.hideShowHelp);
  }

  getLocation() {
    this.loading(true);
    navigator.geolocation.getCurrentPosition(this.showLocation, this.showError, { timeout: 30000 });
  }

  initGMap() {
    const { geo } = this.props;
    this.hasFeatures = !!(geo.features && geo.features.length > 0);
    this.gmap = new window.google.maps.Map(document.getElementById('map'), {
      zoomControl: false,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      zoom: isMobile ? 11 : 12,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      styles,
    });
    this.geocoder = new window.google.maps.Geocoder();

    this.kmzLayer = new window.google.maps.KmlLayer({
      url: 'https://cdn.jsdelivr.net/gh/joseluismurillorios/rexrage@0.0.2/models/delegaciones_grey.kmz',
      map: this.gmap,
      suppressInfoWindows: true,
    });

    this.gmap.data.setStyle({
      fillColor: 'green',
      strokeWeight: 20,
    });

    this.kmzLayer.addListener('click', this.handleMapClick);
    this.gmap.data.addListener('click', this.handleFeatClick);

    this.marker = new window.google.maps.Marker({
      map: this.gmap,
      position: { lat: 32.476784, lng: -116.952631 },
      icon: {
        ...circleMarker,
        scale: 0.55,
        fillOpacity: 0.8,
      },
    });
    this.marker.setVisible(false);

    this.loading(false);
    this.gmap.data.setStyle((feature) => {
      const category = feature.getProperty('category');
      return {
        icon: {
          ...circleMarker,
          anchor: new window.google.maps.Point(0, 0),
          fillColor: COLORS[category],
        },
      };
    });

    this.autocomplete = new window.google.maps.places.Autocomplete(this.searchWidget);
    this.autocomplete.bindTo('bounds', this.gmap);

    this.autocomplete.addListener('place_changed', () => {
      const { onUpdate, setCoords } = this.props;
      const place = this.autocomplete.getPlace();

      const { lat, lng } = place.geometry.location;

      const latitude = lat();
      const longitude = lng();
      const zm = this.gmap.getZoom();
      const zoom = zm < 15 ? 15 : zm;

      this.marker.setVisible(true);
      this.marker.setPosition(place.geometry.location);
      this.setState({ showProps: false });
      this.goTo({ value: { longitude, latitude } }, zoom);

      setCoords({ latitude, longitude });
      onUpdate(place.formatted_address);
    });

    window.google.maps.event.addListenerOnce(this.gmap, 'idle', () => {
      // do something only the first time the map is loaded
      const center = this.gmap.getCenter();
      const zoom = this.gmap.getZoom();
      this.setState({ center, zoom });
      if (this.hasFeatures) {
        console.log(geo);
        this.renderFeatures(geo);
      }
      // this.search();
    });
    window.google.maps.event.addListenerOnce(this.gmap, 'zoom_changed', () => {
      // do something only the first time the map is loaded
      const center = this.gmap.getCenter();
      const zoom = this.gmap.getZoom();
      this.setState({ center, zoom });
    });
  }

  handleMapClick(evnt) {
    const { setCoords } = this.props;
    this.featureSelected = false;
    const { lat, lng } = evnt.latLng;

    const latitude = lat();
    const longitude = lng();
    const zm = this.gmap.getZoom();
    const zoom = zm < 15 ? 15 : zm;

    this.marker.setVisible(true);
    this.marker.setPosition(evnt.latLng);
    this.setState({ showProps: false });
    this.goTo({ value: { longitude, latitude } }, zoom);

    setCoords({ latitude, longitude });

    const latlng = { lat: latitude, lng: longitude };
    this.reverseGeocode(latlng);
  }

  handleFeatClick(evnt) {
    this.featureSelected = true;
    // this.kmzLayer.setMap(null);
    this.container.classList.add('transparent');

    const feat = evnt.feature;

    const properties = {};
    feat.forEachProperty((p, st) => {
      properties[st] = p;
    });
    // console.log('properties', properties);
    this.setState({ properties, showProps: true });

    this.marker.setVisible(true);
    this.marker.setPosition(evnt.latLng);
  }

  createOpinion() {
    this.setState({ showProps: false });
    const { toggle } = this.props;
    toggle();
  }

  toggleMapType() {
    const { mapType } = this.state;
    const newMapType = mapType === 'roadmap' ? 'satellite' : 'roadmap';
    this.setState({ mapType: newMapType });
    this.gmap.setMapTypeId(newMapType);
  }

  toggleShowHelp() {
    const { showHelp } = this.state;
    this.setState({ showHelp: !showHelp });
  }

  hideShowHelp() {
    this.setState({ showHelp: false });
  }

  showLocation(position) {
    const { setCoords } = this.props;
    const { longitude, latitude } = position.coords;
    this.marker.setVisible(true);
    this.marker.setPosition({ lat: latitude, lng: longitude });
    this.goTo({ value: { longitude, latitude } }, 17);

    setCoords({ latitude, longitude });

    const latlng = { lat: latitude, lng: longitude };
    this.reverseGeocode(latlng);
  }

  showError(err) {
    toast.error(err.message);
    this.loading(false);
  }

  reverseGeocode(location) {
    const { onUpdate } = this.props;
    this.geocoder.geocode({ location }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          const formattedAddress = results[0].formatted_address;
          console.log(formattedAddress);
          onUpdate(formattedAddress);
          this.searchWidget.value = formattedAddress;
        } else {
          toast.error('No results found');
        }
      } else {
        toast.error(`Geocoder failed due to: ${status}`);
      }
    });
  }

  loading(v) {
    const { onLoad } = this.props;
    setTimeout(() => {
      onLoad(v);
    }, 1000);
  }

  zoomOut() {
    this.gmap.setZoom(this.gmap.getZoom() - 1);
  }

  zoomIn() {
    this.gmap.setZoom(this.gmap.getZoom() + 1);
  }

  goTo({ value }, zoom = 12) {
    if (!value) {
      return;
    }
    // this.kmzLayer.setMap(null);
    this.container.classList.add('transparent');
    const { latitude, longitude, id = '' } = value;


    this.gmap.setZoom(zoom - 1);
    this.gmap.setCenter(new window.google.maps.LatLng(latitude, longitude));
    this.gmap.setZoom(zoom);

    if (id !== '') {
      this.searching = true;
    }

    this.setState({ showProps: false });
    this.loading(false);
  }

  toggleDataLayer() {
    const { showDataLayer } = this.state;
    this.gmap.data.setStyle((feature) => {
      const category = feature.getProperty('category');
      return {
        icon: {
          ...circleMarker,
          anchor: new window.google.maps.Point(0, 0),
          fillColor: COLORS[category],
        },
        visible: !showDataLayer,
      };
    });
    this.setState({ showDataLayer: !showDataLayer });
  }

  reset() {
    const { zoom, center } = this.state;
    this.gmap.setCenter(center || new window.google.maps.LatLng(TIJUANA[1], TIJUANA[0]));
    this.gmap.setZoom(zoom);
    this.container.classList.remove('transparent');
    this.setState({ showProps: false });
  }

  renderFeatures(geo) {
    this.hasFeatures = !!(geo.features && geo.features.length > 0);
    console.log(geo, this.hasFeatures);
    this.gmap.data.forEach((feature) => {
      this.gmap.data.remove(feature);
    });
    this.gmap.data.addGeoJson(geo);
    this.setState({ hasFeatures: this.hasFeatures });
  }

  renderMap() {
    window.initGMap = this.initGMap;
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGMap&libraries=places`);
  }

  render() {
    const {
      mapType,
      properties,
      showProps,
      showHelp,
      tooltip,
      hasFeatures,
      showDataLayer,
    } = this.state;
    const {
      geo,
    } = this.props;
    const {
      address,
    } = this.props;
    const hasGeo = (geo && !this.isIOS && !(window.cordova));
    const hasAddress = (address.latitude !== 0);
    const hasGeolocation = !!(navigator.geolocation);
    const showTooltip = !this.isMobile && !showHelp;
    return (
      <div className="fill full">
        <div ref={(el) => { this.container = el; }} id="map" className="fill full" />
        <div ref={(el) => { this.help = el; }} className={`map-help fs-menu ${showHelp ? 'open' : ''}`}>
          <div className="fixed-left-bottom">
            <span>Mostrar/Cerrar ayuda</span>
            {
              hasGeo
              && <span>Descargar KML</span>
            }
            {
              hasAddress
              && <span>Buscar en la zona</span>
            }
            <span>Ver mapa completo</span>
            <span>Vista satelital</span>
            {
              hasGeolocation
              && <span>Ir a mi ubicación</span>
            }
          </div>
        </div>
        <div className="map-menu fixed-right-top bg-light">
          <label htmlFor="SearchWidget">
            <input id="SearchWidget" ref={(el) => { this.searchWidget = el; }} type="text" className="map-search" />
            <span className="implanf-search" />
          </label>
        </div>
        <div
          ref={(el) => { this.menu = el; }}
          className="map-menu fixed-left-bottom"
          onMouseLeave={() => { this.setState({ tooltip: '' }); }}
        >
          <Button
            onTap={this.toggleShowHelp}
            onMouseMove={() => { this.setState({ tooltip: 'help' }); }}
            color="light"
          >
            {
              showHelp
                ? <span className="implanf-close" />
                : <span className="implanf-help" />
            }
            {
              (showTooltip && tooltip === 'help')
              && <span className="map-tooltip">{showHelp ? 'Cerrar ayuda' : 'Mostrar ayuda'}</span>
            }
          </Button>
          {
            (geo && !isIOS() && !(window.cordova))
            && (
              <Button
                onTap={this.download}
                onMouseMove={() => { this.setState({ tooltip: 'download' }); }}
                color="light"
              >
                <span className="implanf-get_app" />
                {
                  (showTooltip && tooltip === 'download')
                  && <span className="map-tooltip">Descargar KML</span>
                }
              </Button>
            )
          }
          {
            hasFeatures
            && (
              <Button
                onTap={() => {
                  this.toggleDataLayer(address);
                }}
                onMouseMove={() => { this.setState({ tooltip: 'search' }); }}
                color="light"
              >
                <span className={showDataLayer ? 'implanf-visibility_off' : 'implanf-visibility'} />
                {
                  (showTooltip && tooltip === 'search')
                  && <span className="map-tooltip">{showDataLayer ? 'Ocultar Reportes' : 'Ver Reportes'}</span>
                }
              </Button>
            )
          }
          <Button
            onTap={this.reset}
            onMouseMove={() => { this.setState({ tooltip: 'view' }); }}
            color="light"
          >
            <span className="implanf-public" />
            {
              (showTooltip && tooltip === 'view')
              && <span className="map-tooltip">Ver mapa completo</span>
            }
          </Button>
          <Button
            onTap={this.toggleMapType}
            onMouseMove={() => { this.setState({ tooltip: 'satellite' }); }}
            color="light"
            className={`${mapType === 'satellite' ? 'active' : ''}`}
          >
            <span className="implanf-satellite" />
            {
              (showTooltip && tooltip === 'satellite')
              && <span className="map-tooltip">Vista satelital</span>
            }
          </Button>
          {
            hasGeolocation
            && (
              <Button
                onTap={this.getLocation}
                onMouseMove={() => { this.setState({ tooltip: 'myloc' }); }}
                color="light"
              >
                <span className="implanf-my_location" />
                {
                  (showTooltip && tooltip === 'myloc')
                  && <span className="map-tooltip">Mi ubicación</span>
                }
              </Button>
            )
          }
        </div>

        <div className="map-menu fixed-right-bottom">
          {
            hasAddress
            && (
              <Button
                onTap={this.createOpinion}
                color="primary"
              >
                <span className="implanf-add_location" />
                {
                  (showTooltip && tooltip === 'add')
                  && <span className="map-tooltip">Agregar proyecto</span>
                }
              </Button>
            )
          }
          <Button
            onTap={this.zoomIn}
            color="light"
          >
            <span className="implanf-add" />
          </Button>
          <Button
            onTap={this.zoomOut}
            color="light"
          >
            <span className="implanf-remove" />
          </Button>
        </div>

        <Attrs
          showInfo={showProps}
          info={properties}
          zoomOut={this.zoomOut}
          zoomIn={this.zoomIn}
          toggle={() => this.setState({ showProps: false })}
        />
      </div>
    );
  }
}

GMap.defaultProps = {
  onLoad: () => { console.log('webmap loading successfully'); },
  toggle: () => {},
  setCoords: () => {},
  onUpdate: () => {},
  address: {},
  geo: {},
};

GMap.propTypes = {
  onLoad: PropTypes.func,
  toggle: PropTypes.func,
  setCoords: PropTypes.func,
  onUpdate: PropTypes.func,
  address: PropTypes.objectOf(PropTypes.any),
  geo: PropTypes.objectOf(PropTypes.any),
};

export default GMap;

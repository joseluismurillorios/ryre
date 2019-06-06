/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import tokml from 'tokml';

import { loadScript, circleMarker, styles } from '../../../helpers/helper-gmap';

import {
  COLORS,
  TIJUANA,
} from '../../../helpers/helper-constants';

import {
  GOOGLE_API_KEY,
  TIJUANA_DELEGACIONES_KML,
  KMZS,
} from '../../../../config';

import {
  isIOS,
  isMobile,
} from '../../../helpers/helper-util';

// import Button from '../../atoms/button';
// import Attrs from '../../molecules/attrs';

import ControlsLeft from '../controls/left';
import ControlsRight from '../controls/right';

import Dropdown from '../../molecules/toggle';

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // properties: {},
      showProps: false,
      showHelp: false,
      zoom: isMobile ? 11 : 12,
      mapType: 'roadmap',
      tooltip: '',
      showDataLayer: true,
      hasFeatures: false,
      dhtml: 'Seleccione una capa',
      kmzs: KMZS,
      visibles: {
        // eslint-disable-next-line quote-props
        'Colonias': true,
      },
      // description: '<span>nothing</span>',
    };
    this.getLocation = this.getLocation.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
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
    this.toggleShowHelp = this.toggleShowHelp.bind(this);
    this.hideShowHelp = this.hideShowHelp.bind(this);
    this.toggleMapType = this.toggleMapType.bind(this);
    this.download = this.download.bind(this);
    this.handleKmzChange = this.handleKmzChange.bind(this);
    // this.hideAttrs = this.hideAttrs.bind(this);

    this.featureSelected = false;
    this.searching = false;

    this.isIOS = isIOS;
    this.pom = document.createElement('a');

    this.kmzLayers = {};
  }

  componentDidMount() {
    this.loading(true);
    if (window.google) {
      this.initGMap();
    } else {
      this.renderMap();
    }

    this.help.addEventListener('click', this.hideShowHelp);
  }


  componentWillUnmount() {
    this.help.removeEventListener('click', this.hideShowHelp);
  }

  getLocation() {
    this.loading(true);
    navigator.geolocation.getCurrentPosition(this.showLocation, this.showError, { timeout: 30000 });
  }

  initGMap() {
    const { user } = this.props;
    const { kmzs } = this.state;
    this.gmap = new window.google.maps.Map(document.getElementById('map'), {
      gestureHandling: 'greedy',
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

    kmzs.map((kmz) => {
      this.kmzLayers[kmz.name] = new window.google.maps.KmlLayer({
        // url: TIJUANA_DELEGACIONES_KMZ,
        url: kmz.url,
        map: kmz.visible ? this.gmap : null,
        suppressInfoWindows: true,
      });
      this.kmzLayers[kmz.name].addListener('click', this.handleMapClick);
      this.kmzLayers[kmz.name].addListener('status_changed', this.handleKmzChange);
      return true;
    });


    this.gmap.data.setStyle({
      fillColor: 'green',
      strokeWeight: 20,
    });

    this.loading(false);
    this.gmap.data.setStyle((feature) => {
      const category = feature.getProperty('category');
      const uid = feature.getProperty('user');
      const strokeColor = (uid === user.uid) ? '#232323' : '#FFFFFF';
      return {
        icon: {
          ...circleMarker,
          anchor: new window.google.maps.Point(0, 0),
          fillColor: COLORS[category],
          strokeColor,
        },
      };
    });

    this.autocomplete = new window.google.maps.places.Autocomplete(this.searchWidget);
    this.autocomplete.bindTo('bounds', this.gmap);

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();

      const { lat, lng } = place.geometry.location;

      const latitude = lat();
      const longitude = lng();
      const zm = this.gmap.getZoom();
      const zoom = zm < 15 ? 15 : zm;

      // this.marker.setVisible(true);
      // this.marker.setPosition(place.geometry.location);
      this.setState({ showProps: false });
      this.goTo({ value: { longitude, latitude } }, zoom);
    });

    window.google.maps.event.addListenerOnce(this.gmap, 'idle', () => {
      // do something only the first time the map is loaded
      this.loading(false);
      const center = this.gmap.getCenter();
      const zoom = this.gmap.getZoom();
      this.setState({ center, zoom });
      setTimeout(() => {
        this.reset();
      }, 500);
    });
    window.google.maps.event.addListenerOnce(this.gmap, 'zoom_changed', () => {
      // do something only the first time the map is loaded
      const center = this.gmap.getCenter();
      const zoom = this.gmap.getZoom();
      this.setState({ center, zoom });
    });
  }

  handleKmzChange(e) {
    console.log('status_changed', e, this.visibles);
  }

  handleMapClick(e) {
    const { infoWindowHtml } = e.featureData;
    const noTitle = infoWindowHtml.replace(/text-align:center;font-weight:bold;background:#9CBCE2/g, 'display:none');
    this.info = noTitle.replace(/9CBCE2/g, '000000');
    e.featureData.infoWindowHtml = this.info.replace(/D4E4F3/g, 'f5f5f5');

    this.setState({
      dhtml: this.info,
      showProps: true,
    });

    this.hideDropdown();

    // this.setState({ description: infoWindowHtml });
    // this.reverseGeocode(latlng);
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
    // this.marker.setVisible(true);
    // this.marker.setPosition({ lat: latitude, lng: longitude });
    this.goTo({ value: { longitude, latitude } }, 17);

    setCoords({ latitude, longitude });

    // const latlng = { lat: latitude, lng: longitude };
    // this.reverseGeocode(latlng);
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
          this.setState({ tooltip: 'add' });
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
    // this.container.classList.add('transparent');
    const { latitude, longitude, id = '' } = value;


    this.gmap.setZoom(zoom - 1);
    this.gmap.setCenter(new window.google.maps.LatLng(latitude, longitude));
    this.gmap.setZoom(zoom);

    if (id !== '') {
      this.searching = true;
    }

    // this.setState({ showProps: false });
    this.loading(false);
  }

  download() {
    const stamp = (new Date()).getTime();
    const filename = `caminapp-${stamp}.kml`;
    // const bb = new Blob([kml], { type: 'text/xml' });

    this.pom.setAttribute('href', TIJUANA_DELEGACIONES_KML);
    this.pom.setAttribute('download', filename);

    this.pom.dataset.downloadurl = ['text/xml', this.pom.download, this.pom.href].join(':');
    this.pom.draggable = true;
    this.pom.classList.add('dragout');

    this.pom.click();
  }


  reset() {
    const { zoom, center } = this.state;
    this.gmap.setCenter(center || new window.google.maps.LatLng(TIJUANA[1], TIJUANA[0]));
    this.gmap.setZoom(zoom);
    // this.kmzLayer.setMap(this.gmap);
    this.container.classList.remove('transparent');
    this.setState({ showProps: false });
  }

  renderMap() {
    window.initGMap = this.initGMap;
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGMap&libraries=places`);
  }

  render() {
    const {
      mapType,
      // properties,
      showProps,
      showHelp,
      tooltip,
      hasFeatures,
      showDataLayer,
      dhtml,
      kmzs,
      visibles,
      // description,
    } = this.state;
    const {
      geo,
      // user,
      // isAdmin,
    } = this.props;
    // console.log(kmzs);
    const hasGeo = (geo && !this.isIOS && !(window.cordova));
    const hasGeolocation = !!(navigator.geolocation);
    const showTooltip = !this.isMobile && !showHelp;
    const datalayerVisible = showDataLayer ? 'Ocultar' : 'Ver';
    const mapTypeVisible = mapType === 'satellite' ? 'Caminos' : 'Satélite';
    return (
      <div className="fill full">
        <div ref={(el) => { this.container = el; }} id="map" className="fill full" />
        <div className="map-menu fixed-right-top bg-light">
          <label htmlFor="SearchWidget">
            <input id="SearchWidget" ref={(el) => { this.searchWidget = el; }} type="text" className="map-search" />
            <span className="btn btn-lighter implanf-search" />
          </label>
        </div>

        <div ref={(el) => { this.help = el; }} className={`map-help fs-menu ${showHelp ? 'open' : ''}`}>
          <div className="fixed-left-bottom">
            <span>{isMobile ? 'Ayuda' : 'Mostrar/Cerrar ayuda'}</span>
            {
              hasGeo
              && <span>{isMobile ? 'KML' : 'Descargar KML'}</span>
            }
            {
              hasFeatures
              && <span>{isMobile ? datalayerVisible : 'Ver/Ocultar todo'}</span>
            }
            <span>{isMobile ? 'Vista' : mapTypeVisible}</span>
            <span>{isMobile ? 'Inicio' : 'Ver mapa completo'}</span>
          </div>
          <div className="fixed-right-bottom">
            <span>{isMobile ? 'Alejar' : 'Alejar mapa'}</span>
            <span>{isMobile ? 'Acercar' : 'Acercar mapa'}</span>
            {
              hasGeolocation
              && <span>{isMobile ? 'Ubícame' : 'Ir a mi ubicación'}</span>
            }
          </div>
        </div>

        <ControlsLeft
          showHelp={showHelp}
          showTooltip={showTooltip}
          geo={geo}
          tooltip={tooltip}
          hasFeatures={hasFeatures}
          showDataLayer={showDataLayer}
          mapType={mapType}
          toggleShowHelp={this.toggleShowHelp}
          download={this.download}
          toggleDataLayer={this.toggleDataLayer}
          toggleMapType={this.toggleMapType}
          onMouseLeave={(tip) => {
            this.setState({ tooltip: tip.tooltip });
          }}
          reset={this.reset}
        />

        <ControlsRight
          tooltip={tooltip}
          showTooltip={showTooltip}
          hasGeolocation={hasGeolocation}
          getLocation={this.getLocation}
          zoomOut={this.zoomOut}
          zoomIn={this.zoomIn}
          onMouseLeave={(tip) => {
            this.setState({ tooltip: tip.tooltip });
          }}
        />

        <Dropdown setRef={(el) => { this.hideDropdown = el; }} title="Seleccionar capa" className="map-toggle">
          {
            kmzs.map(kmz => (
              <button
                key={kmz.name}
                type="button"
                onClick={() => {
                  const visible = !!(visibles[kmz.name]);
                  this.setState({
                    visibles: {
                      ...visibles,
                      [kmz.name]: !visible,
                    },
                  });
                  this.kmzLayers[kmz.name].setMap(!visible ? this.gmap : null);
                }}
                className={`toggle-item ${visibles[kmz.name] ? 'selected' : ''}`}
              >
                {kmz.name}
              </button>
            ))
          }
        </Dropdown>

        {
          showProps && (
            <div className="map-attrs">
              <button
                className="btn-close"
                type="button"
                onClick={() => {
                  this.setState({
                    dhtml: 'Seleccione una capa',
                    showProps: false,
                  });
                }}
              >
                <i className="implanf-close" />
              </button>
              <div className="map-attrs-content" dangerouslySetInnerHTML={{ __html: dhtml }} />
            </div>
          )
        }

        {/* <Attrs
          showInfo={showProps}
          info={properties}
          zoomOut={this.zoomOut}
          zoomIn={this.zoomIn}
          toggle={this.hideAttrs}
          user={user}
          isAdmin={isAdmin}
          deleteReport={this.deleteReport}
        /> */}
      </div>
    );
  }
}

GMap.defaultProps = {
  onLoad: () => { console.log('webmap loading successfully'); },
  setCoords: () => {},
  onUpdate: () => {},
  // address: {},
  geo: {},
  user: {},
  // isAdmin: false,
};

GMap.propTypes = {
  onLoad: PropTypes.func,
  setCoords: PropTypes.func,
  onUpdate: PropTypes.func,
  // address: PropTypes.objectOf(PropTypes.any),
  geo: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(
    PropTypes.any,
  ),
  // isAdmin: PropTypes.bool,
};

export default GMap;

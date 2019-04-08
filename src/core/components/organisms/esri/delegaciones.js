/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { TIJUANA_DELEGACIONES_KMZ } from '../../../../config';
import {
  createLocator,
  createMap,
  createMapView,
} from '../../../helpers/helper-esri';

import { isIOS, isMobile } from '../../../helpers/helper-util';

import loader from '../../hoc/loader';

class Delegaciones extends Component {
  constructor(props) {
    super(props);
    this.loading = this.loading.bind(this);

    this.isIOS = isIOS;
    this.isMobile = isMobile;
  }

  componentDidMount() {
    this.loading(true);
    const { modules } = this.props;

    this.kmzLayer = new modules.KMLLayer({
      url: TIJUANA_DELEGACIONES_KMZ,
    });

    // Makes the layer 60% transparent
    this.kmzLayer.opacity = 0.6;
    this.kmzLayer.popupEnabled = false;

    this.locatorTask = createLocator(modules.Locator);
    this.map = createMap(modules.Map, this.kmzLayer);
    this.view = createMapView(modules.MapView, this.map);

    // this.view.ui.components = ['attribution'];

    this.view.when(() => {
      // This function will execute once the promise is resolved
      this.loading(false);
    }, (error) => {
      // This function will execute if the promise is rejected due to an error
      console.log('error: ', error);
      toast.error(error);
    });

    this.view.on('mouse-wheel', (event) => {
      // prevents zooming with the mouse-wheel event
      event.stopPropagation();
    });

    this.view.on('double-click', (event) => {
      console.log('double-click: ', event);
      event.stopPropagation();
    });

    this.view.on('click', (event) => {
      // Listen for when the user clicks on the view
      this.view.hitTest(event).then((response) => {
        // If user selects a feature, select it
        const { results } = response;
        const opinionsClick = results[0].graphic.layer === this.opinionsLayer;
        if (results.length > 0 && results[0].graphic && opinionsClick) {
          const { attributes } = results[0].graphic;
          console.log(attributes);
          if (this.highlight) {
            this.highlight.remove();
          }
          this.highlight = this.opinionsLayerView.highlight(results[0].graphic);
        } else {
          console.log(response);
        }
      });
    });

    const padding = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 16,
    };
    this.view.ui.padding = this.isMobile ? padding : this.view.ui.padding;
  }

  loading(v) {
    const { onLoad } = this.props;
    setTimeout(() => {
      onLoad(v);
    }, 1000);
  }

  render() {
    return (
      <div
        className="esri-map-half"
        id="viewDiv"
      />
    );
  }
}

Delegaciones.defaultProps = {
  onLoad: () => { console.log('webmap loading successfully'); },
};

Delegaciones.propTypes = {
  modules: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  onLoad: PropTypes.func,
};

export default loader('modules')(Delegaciones);

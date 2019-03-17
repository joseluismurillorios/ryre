/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
// import { CSSTransition } from 'react-transition-group';

import $ from '../../../helpers/helper-jquery';

// import { opinionesFetch } from '../../../redux/actions/common/async';
import { setLoader } from '../../../redux/actions/common';
import { setAddress, setOpinion, setLatLng } from '../../../redux/actions/info';
import { onReportsChange } from '../../../redux/actions/reports/async';
import {
  storeOpinion,
  getAddressInfo,
} from '../../../redux/actions/info/async';

import Scrollable from '../../atoms/scrollable';
import GMap from '../../organisms/gmap';
import Report from '../../organisms/report';

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      errors: {},
    };
    this.toggleReport = this.toggleReport.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
  }

  componentDidMount() {
    const { onReports } = this.props;
    onReports();
  }

  onSubmit() {
    const {
      info,
      onSave,
      common,
    } = this.props;
    const { user } = common;
    const errors = {};
    let error = false;
    let opened = true;
    Object.entries(info.opinion).forEach(([key, val]) => {
      if (key === 'category' || key === 'subcategory' || key === 'type') {
        const short = val === '';
        if (short) {
          error = true;
          errors[key] = true;
        }
      }
    });
    if (error) {
      toast.error('Es necesario agregar mas informacion');
    } else if (user && user.uid) {
      onSave(user.uid, info, info.opinion);
      // console.log(user.uid, info, info.opinion);
      // mapLoading(true);
      opened = false;
    } else {
      $('#Login').modal('show');
    }
    this.setState({ errors, opened });
  }

  toggleReport() {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  zoomOut() {
    if (this.viewReference.zoomOut) {
      this.viewReference.zoomOut();
    }
  }

  zoomIn() {
    if (this.viewReference.zoomIn) {
      this.viewReference.zoomIn();
    }
  }

  render() {
    const {
      mapLoading,
      onChange,
      info,
      // fetchOpiniones,
      setCoords,
      onUpdate,
      reports,
    } = this.props;
    const { opened, errors } = this.state;
    // console.log(reports);
    return (
      <Scrollable
        id="Google"
        className="app__page"
        setRef={(el) => { this.container = el; }}
        disabled
      >
        <GMap
          onLoad={mapLoading}
          // search={fetchOpiniones}
          ref={(el) => { this.viewReference = el; }}
          toggle={this.toggleReport}
          address={info}
          geo={reports.geo}
          setCoords={setCoords}
          onUpdate={onUpdate}
        />

        <Report
          onToggle={this.toggleReport}
          opened={opened}
          onChange={onChange}
          onSubmit={this.onSubmit}
          opinion={info.opinion}
          errors={errors}
        />
        {/* <div id="infoDiv" /> */}
      </Scrollable>
    );
  }
}

Google.defaultProps = {
  setCoords: () => {},
  mapLoading: () => { console.log('webmap loaded successfully'); },
  onUpdate: () => {},
  onChange: () => {},
  onSave: () => {},
  onReports: () => {},
  // fetchOpiniones: () => {},
};

Google.propTypes = {
  common: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  info: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  reports: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  setCoords: PropTypes.func,
  mapLoading: PropTypes.func,
  onUpdate: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onReports: PropTypes.func,
  // fetchOpiniones: PropTypes.func,
};

const mapStateToProps = state => ({
  common: state.common,
  info: state.info,
  reports: state.reports,
});

const mapDispatchToProps = {
  mapLoading: setLoader,
  onUpdate: setAddress,
  onChange: setOpinion,
  onSave: storeOpinion,
  // fetchOpiniones: opinionesFetch,
  getAddress: getAddressInfo,
  setCoords: setLatLng,
  onReports: onReportsChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Google);

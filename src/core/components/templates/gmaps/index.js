/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import $ from '../../../helpers/helper-jquery';

import { setLoader } from '../../../redux/actions/common';
import { setAddress, setOpinion, setLatLng } from '../../../redux/actions/info';
import { onReportsChange } from '../../../redux/actions/reports/async';
import {
  storeOpinion,
  deleteOpinion,
} from '../../../redux/actions/info/async';

import Scrollable from '../../atoms/scrollable';
import GMaps from '../../organisms/maps';
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
      common,
      setCoords,
      onUpdate,
      opinionDelete,
    } = this.props;
    const { opened, errors } = this.state;
    const { user } = common;
    const { isAdmin } = common;
    return (
      <Scrollable
        id="Google"
        className="app__page"
        setRef={(el) => { this.container = el; }}
        disabled
      >
        <GMaps
          onLoad={mapLoading}
          ref={(el) => { this.viewReference = el; }}
          toggle={this.toggleReport}
          address={info}
          setCoords={setCoords}
          onUpdate={onUpdate}
          user={user || {}}
          opinionDelete={opinionDelete}
          isAdmin={isAdmin}
        />

        <Report
          onToggle={this.toggleReport}
          opened={opened}
          onChange={onChange}
          onSubmit={this.onSubmit}
          opinion={info.opinion}
          errors={errors}
        />
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
  opinionDelete: () => {},
};

Google.propTypes = {
  common: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  info: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  setCoords: PropTypes.func,
  mapLoading: PropTypes.func,
  onUpdate: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onReports: PropTypes.func,
  opinionDelete: PropTypes.func,
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
  setCoords: setLatLng,
  onReports: onReportsChange,
  opinionDelete: deleteOpinion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Google);

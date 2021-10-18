import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AlertElement from '@mui/material/Alert';

const Alert = ({ alerts }: any) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: any) => (
    <AlertElement
      style={{ margin: '1em 0' }}
      onClose={() => {}}
      key={alert.id}
      severity={alert.alertType}
    >
      {alert.msg}
    </AlertElement>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

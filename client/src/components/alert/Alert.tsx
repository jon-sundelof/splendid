import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeAlert } from '../../actions/alert';

import AlertElement from '@mui/material/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@mui/material/IconButton';

const Alert = ({ alerts, removeAlert }: any) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: any) => (
    <AlertElement
      style={{ margin: '1em 0' }}
      key={alert.id}
      severity={alert.alertType}
      action={
        <IconButton
          aria-label='close'
          color='inherit'
          size='small'
          onClick={() => {
            removeAlert(alert.id);
          }}
        >
          <CloseIcon fontSize='inherit' />
        </IconButton>
      }
      sx={{ mb: 2 }}
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

export default connect(mapStateToProps, { removeAlert })(Alert);

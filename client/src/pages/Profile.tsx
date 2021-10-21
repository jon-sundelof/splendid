import React from 'react';
import { Redirect } from 'react-router';

/* Redux setup */
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
/* ******************************** */

/* Material UI imports */
import Button from '@mui/material/Button';
/* ************************************ */

const Profile = ({ auth: { isAuthenticated, loading }, logout }: any) => {
  // Redirect if logged in
  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <Button onClick={logout} variant='contained' color='error'>
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Profile);

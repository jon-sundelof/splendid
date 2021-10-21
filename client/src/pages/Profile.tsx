import React from 'react';
import { Redirect } from 'react-router';

/* SCSS */
import '../styles/profile.scss';
/* **************************** */

/* Redux setup */
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
/* ******************************** */

/* Material UI imports */
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
/* ************************************ */

const Profile = ({ auth: { isAuthenticated, loading, user }, logout }: any) => {
  // Redirect if logged in
  if (!isAuthenticated && !loading) {
    return <Redirect to='/' />;
  }
  return loading ? (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  ) : (
    <main className='main_container_profile'>
      <img src={user.avatar} className='avatar_profile' />
      <div>
        <h2>{user.firstName}</h2>
        <h2>{user.lastName}</h2>
      </div>
      <div>
        <label>Email: </label>
        <span>{user.email}</span>
      </div>
      <Button onClick={logout} variant='contained' color='error'>
        Logout
      </Button>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Profile);

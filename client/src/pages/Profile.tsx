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

const Profile = ({ auth: { isAuthenticated, loading, user }, logout }: any) => {
  // Redirect if logged in
  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <main>
      <img src={user.avatar} className='avatar_profile' />
      <div>
        <h2>{user.firstName}</h2>
        <h2>{user.lastName}</h2>
      </div>
      <label>Email: </label>
      <span>{user.email}</span>

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

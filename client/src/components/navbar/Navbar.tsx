import React, { useState } from 'react';
import styles from './Navbar.module.scss';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to='/'>
            <i className='fas fa-search'></i>
            Discover
          </Link>
        </li>
        <li>
          <Link to='/publish'>
            <i className='fas fa-plus'></i>
            Publish Ad
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <i className='fas fa-user'></i>Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import styles from './Navbar.module.scss';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to='/'>Discover</Link>
        </li>
        <li>
          <Link to='/publish'>Publish Ad</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

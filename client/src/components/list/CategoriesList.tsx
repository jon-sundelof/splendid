import React from 'react';
import { Link } from 'react-router-dom';
/* import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu'; */

import styles from './CategoriesList.module.scss';

const CategoriesList = () => {
  const categoriesList = [
    'Fritid och Hobby',
    'Verktyg',
    'Fest och Party',
    'Fordon',
    'Elektronik',
  ];

  return (
    <nav className={styles.list_container}>
      <ul>
        {categoriesList.map((item, i) => {
          return (
            <li key={i}>
              <Link to={`/category/${item.trim().toLowerCase()}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoriesList;

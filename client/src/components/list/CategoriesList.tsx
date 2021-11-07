import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import styles from './CategoriesList.module.scss';

const CategoriesList = ({ setCategory, values, setCategoryDiscover }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const open = Boolean(anchorEl);
  const options = [
    'All items',
    'Leisure och Hobby',
    'Tools',
    'Party items',
    'Vehicle',
    'Electronics',
  ];

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    if (setCategoryDiscover) {
      setCategoryDiscover(options[index]);
    }
    if (values && options) {
      setCategory({ ...values, category: options[index] });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.list_container}>
      <List
        component='nav'
        aria-label='Device settings'
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id='lock-button'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='Categories'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary='Categories'
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CategoriesList;

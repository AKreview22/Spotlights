import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { FaFilter, FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import styles from './Sortion.module.scss';

interface SortionProps {
  onSort: (order: 'unsorted' | 'asc' | 'desc') => void;
}

const Sortion: React.FC<SortionProps> = ({ onSort }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortOrder, setSortOrder] = useState<'unsorted' | 'asc' | 'desc'>('unsorted');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortChange = (order: 'unsorted' | 'asc' | 'desc') => {
    setSortOrder(order);
    onSort(order);
    handleClose();
  };

  const getIcon = () => {
    switch (sortOrder) {
      case 'asc':
        return <FaSortAmountUp />;
      case 'desc':
        return <FaSortAmountDown />;
      default:
        return <FaFilter />;
    }
  };

  return (
    <div className={styles.sortion}>
      <IconButton className={styles.sortButton} onClick={handleClick}>
        {getIcon()}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: styles.dropdown
        }}
      >
        <MenuItem
          className={`${styles.dropdownItem} ${sortOrder === 'unsorted' ? styles.active : ''}`}
          onClick={() => handleSortChange('unsorted')}
        >
          Unsorted
        </MenuItem>
        <MenuItem
          className={`${styles.dropdownItem} ${sortOrder === 'asc' ? styles.active : ''}`}
          onClick={() => handleSortChange('asc')}
        >
          Sort by Price: Low to High
        </MenuItem>
        <MenuItem
          className={`${styles.dropdownItem} ${sortOrder === 'desc' ? styles.active : ''}`}
          onClick={() => handleSortChange('desc')}
        >
          Sort by Price: High to Low
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Sortion;

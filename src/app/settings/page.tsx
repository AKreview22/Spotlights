"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import { getCurrentTheme, toggleDarkMode } from '@/utils/theme';

const SettingsPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(getCurrentTheme());
  }, []);

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={styles.settingsPage}>
      <h1>Settings</h1>
      <div className={styles.darkModeToggle}>
        <span className={styles.label}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        <label htmlFor="darkModeSwitch" className={styles.switch}>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggleDarkMode}
            id="darkModeSwitch"
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;

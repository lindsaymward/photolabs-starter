import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
    </div>
  );
};

export default DarkModeButton;
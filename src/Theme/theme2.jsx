import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../Theme/theme1';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        document.body.classList.remove('black-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        document.body.classList.add('black-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
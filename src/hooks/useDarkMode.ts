// import { useState, useEffect } from 'react';

// type Theme = 'light' | 'dark';

// export const useDarkMode = () => {
//   const [theme, setTheme] = useState<Theme>(() => {
//     const storedTheme = window.localStorage.getItem('theme');
//     return (storedTheme || 'light') as Theme;
//   });

//   useEffect(() => {
//     const body = document.querySelector('body');
//     if (theme === 'dark') {
//       body?.classList.add('dark');
//     } else {
//       body?.classList.remove('dark');
//     }
//     window.localStorage.setItem('theme', theme);
//   }, [theme]);

//   function toggleTheme() {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }

//   return [theme, toggleTheme];
// }

import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  }

  return { isDarkMode, toggleDarkMode };
}
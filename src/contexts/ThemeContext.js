import React from 'react';

export const themes = {
    light: {
        id: 0,
        name: 'Светлая тема',
        modifierClass: '',
        background: '#eeeeee',
    },
    dark: {
        id: 1,
        name: 'Темная тема',
        modifierClass: '_dark',
        background: '#222222',
    },
  };

// export const ThemeContext = React.createContext({
//     theme: themes.light,
//     toggleTheme: () => {},
//   });

export const ThemeContext = React.createContext();
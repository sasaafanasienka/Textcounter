import React from 'react';

export const TextContext = React.createContext({
  text: 'залупа коня',
  setNewContext: () => {
    console.log(1)
  }
});

// export const text = {
//   data: {
//     text: ''
//   }
// };
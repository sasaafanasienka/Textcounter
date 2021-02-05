import React from 'react';

let text = ''

export function setText(value) {
  text = value
  console.log(text)
  React.createContext(text)
}

export let TextContext = React.createContext(text);

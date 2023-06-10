import * as React from 'react'

const formatName = (name) => {
    const words = name.split('-');
    const formattedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formattedWords.join(' ');
  };
export default formatName;  
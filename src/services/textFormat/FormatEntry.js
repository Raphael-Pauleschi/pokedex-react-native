import * as React from 'react'

function formatEntry(text) {
    //Due to getting info from gb and gba games the text is oddly formated
    return (text.replace(/\f/g, '\n')
      .replace(/\u00ad\n/g, '')
      .replace(/\u00ad/g, '')
      .replace(/ -\n/g, ' - ')
      .replace(/-\n/g, '-')
      .replace(/\n/g, ' '))
  }
export default formatEntry;  
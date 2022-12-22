import React from 'react'

export default function priorities() {
  const options = {
    low: 'secondary',
    normal: 'primary',
    important: 'warning',
    critical: 'danger',
  }

  const describe = index => options[ index ];

  const renderOptions = () => {
    const result = [];
    for( const [key, value] of Object.entries(options) ) {
      result.push( <option key={key} value={key}>{key}</option>);
    }
    return result;
  }

  return {
    options,
    describe,
    renderOptions
  }
}
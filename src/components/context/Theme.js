// 2 things need to happen

import React, { useState } from 'react';

// first we export thr (Context) object
export const ThemeContext = React.createContext();

// second we export a the Provider component

export default function ThemeProvider(props) {

  const [mode, setMode] = useState('dark');

  // theme behavior will control your (setMode) for your child component
  function toggleMode() {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark')
    }
  }
return(
  // (value) is just the magic word that a react provider needs to set it's context values
<ThemeContext.Provider value={{mode, toggleMode}}>
  {props.children}
</ThemeContext.Provider>

)
}



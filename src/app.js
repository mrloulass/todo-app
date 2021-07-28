
import React from 'react';
import SettingProvider from './components/context/Settings.js';
import ToDo from './components/todo/todo.js';

function App () {
    return (
      <SettingProvider>
        <ToDo />
      </SettingProvider>
    );
}

export default App;

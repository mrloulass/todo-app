import React from 'react';
import ReactDOM from 'react-dom';


import App from './app.js';
import ThemeProvider from './components/context/Theme.js'
import AuthProvider from '../src/components/context/Auth.js';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

class Main extends React.Component {
  render() {
    return (
      <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </AuthProvider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

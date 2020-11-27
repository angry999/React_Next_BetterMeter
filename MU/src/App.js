import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import {
  createStyles,
  jssPreset,
  makeStyles
} from '@material-ui/core';
import GoogleAnalytics from 'src/components/GoogleAnalytics';
import ScrollReset from 'src/components/ScrollReset';
import useSettings from 'src/hooks/useSettings';
import Routes from 'src/Routes';
import './app.css'

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

function App() {
  useStyles();

  const { settings } = useSettings();

  return (
    <Router history={history}>
      <ScrollReset />
      <GoogleAnalytics />
      <Routes />
    </Router>
  );
}

export default App;

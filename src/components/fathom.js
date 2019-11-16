import { Component } from 'react';
import fathom from '../external/fathom.js';

/* This component simply calls fathom tracker code to increment counter */

const ignoredHostnames = [
  'localhost',
  'dev-ambassador.status.im',
];

class Fathom extends Component {

  componentDidMount() {
    /* we want to count only the real site statistics */
    if (ignoredHostnames.includes(window.location.hostname)) {
      return
    }
    fathom('set', 'trackerUrl', '//fathom.status.im/collect');
    fathom('set', 'siteId', 'XXGOU');
    fathom('trackPageview');
  }

  render() {
    return null
  }
}

export default Fathom;

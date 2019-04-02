import { configure, addParameters } from '@storybook/react';
import packageJson from '../package.json';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

addParameters({
  options: {
    name: 'React CSS Spinners',
    url: packageJson.repository.url,
    isFullScreen: false,
    showPanel: false
    // more configuration here
  }
});

configure(loadStories, module);

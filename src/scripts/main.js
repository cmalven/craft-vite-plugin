import '../styles/main.scss';

import 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset.js';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/respimg/ls.respimg';

// Conditionally load object fit polyfill if needed
if (!('object-fit' in document.createElement('a').style)) {
  require('lazysizes/plugins/object-fit/ls.object-fit');
}

import { App } from '@malven/modu';

const app = new App({
  importMethod: module => import('./modules/' + module + '.js'),
});
app.init();

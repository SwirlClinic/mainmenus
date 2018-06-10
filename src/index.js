import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

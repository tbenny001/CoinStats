import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './components/AppRouter';
import data from './data/data.js'

data.map(promise => promise.then(data => console.log(data)));

ReactDOM.render(AppRouter, document.getElementById("root"));

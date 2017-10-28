// Code splitting via await/async

// async function getComponent() {
//   const element = document.createElement('div');
//
//   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
//   const print = await import(/* webpackChunkName: "print" */ './print');
//
//   element.innerHTML = _.join(['Yo', 'yo', 'yo', 'marc'], ' ');
//   console.log('print', print);
//   return print.default().then(result => {
//     element.innerHTML += '\n\n' + result;
//     return element;
//   });
// }
//
// getComponent().then(component => {
//   document.body.appendChild(component);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';

ReactDOM.render(<Component />, document.getElementById('root'));

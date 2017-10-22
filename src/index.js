import _ from 'lodash';
// import printMe from './print';
import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Look like we are in develpoment mnode!');
}

function component() {
  const element = document.createElement('div');
  // let btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // btn.innerHTML = 'Click me and check the console! And then what?!';
  // btn.onclick = printMe;
  // element.appendChild(btn);

  const pre = document.createElement('pre');
  pre.innerHTML = ['Hello Webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  element.appendChild(pre);
  return element;
}

document.body.appendChild(component());

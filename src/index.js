// import _ from 'lodash';
import printMe from './print';
import { cube } from './math';
function component() {
  const element = document.createElement('div');
  let btn = document.createElement('button');
  element.innerHTML = ['Hello', 'webpack'].join(' ');
  btn.innerHTML = 'Click me and check the console! And then what?!';
  btn.onclick = printMe;
  element.appendChild(btn);

  const pre = document.createElement('pre');
  pre.innerHTML = ['Hello Webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  element.appendChild(pre);
  return element;
}

document.body.appendChild(component());

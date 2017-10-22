import _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  let btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console! And then what?!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
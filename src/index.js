import _ from 'lodash';
import './index.css';
import pic1 from './index-1.jpg';
import data from  './data.xml';
function component() {
  var  element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  var myPic = new Image();
  myPic.src = pic1;
  element.appendChild(myPic);
  console.log(data);
  return element;
}

document.body.appendChild(component());
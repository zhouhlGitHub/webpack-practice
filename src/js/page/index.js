import _ from 'lodash';
import moment from 'moment';
import mcss from '../../css/lib/reset.css';
import mcss from '../../css/common/global.css';
import mcss from '../../css/common/grid.css';
import mcss from '../../css/page/index.less';
import $ from 'jquery';
function component () {
  var  element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  console.log(moment().format());

  $('.g-bd').append('<p class="test">这是由js生成的一句话。</p>');

  return element;
}

document.body.appendChild(component());

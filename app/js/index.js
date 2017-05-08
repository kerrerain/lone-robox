import $ from 'jquery';
import toggle from './gui/toggle';
import Demo from './demos/box';
import boxes from './custom-boxes';
import AssetsLoader from './assets-loader';

function setup() {
  const demo = new Demo(boxes.dummy);

  $.fn.toggle = toggle;

  $('#canvas').append(demo.app.view);

  const button = $('#button-play').toggle((state) => {
    if (state === true) {
      demo.box.start();
    } else {
      demo.box.pause();
    }
  });

  $('#button-stop').on('click', () => {
    demo.box.stop();
    button.reset();
  });

  Object.keys(boxes).forEach((key) => {
    $('#box-selection').append(`<option value="${key}">${boxes[key].label}</option>`);
  });

  $('#box-selection').on('change', function handler() {
    demo.changeBox(boxes[this.value]);
  });
}

AssetsLoader.load(boxes, setup);

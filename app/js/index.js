import $ from 'jquery';
import toggle from './gui/toggle';
import Demo from './demos/box';
import boxes from './boxes';
import AssetsLoader from './assets-loader';

function setup() {
  const demo = new Demo();

  $.fn.toggle = toggle;

  $('#canvas').append(demo.app.view);

  const button = $('#button-play').toggle((state) => {
    if (state === true) {
      demo.start();
    } else {
      demo.pause();
    }
  });

  $('#button-stop').on('click', () => {
    demo.stop();
    button.reset();
  });

  Object.keys(boxes).forEach((key) => {
    $('#box-selection').append(`<option value="${key}">${boxes[key].label}</option>`);
  });

  $('#box-selection').on('change', function handler() {
    demo.loadOptions(boxes[this.value]);
  });

  demo.loadOptions(boxes.dummy);
}

AssetsLoader.load(boxes, setup);

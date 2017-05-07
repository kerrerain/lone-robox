import $ from 'jquery';
import toggle from './gui/toggle';
import Demo from './demos/box';

const demo = new Demo();

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

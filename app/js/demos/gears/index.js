import $ from 'jquery';
import { loader } from 'pixi.js';
import Demo from './demo';
import template from './gears.html';

function setup() {
  $('body').append(template);

  const demo = new Demo();

  $('#canvas').append(demo.app.view);
}

loader.add('gear', 'assets/images/dummy/dummy-gear.png');
loader.add('frontGearBackground', 'assets/images/dummy/dummy-gear-background.png');
loader.add('frontGearTooth', 'assets/images/dummy/dummy-gear-front.png');
loader.load(setup);

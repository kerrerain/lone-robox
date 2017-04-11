import { Application } from 'pixi.js';
import Tooth from '../comb/tooth';

const GLOBAL_OPTIONS = {
  points: 5,
  length: 80,
  displayPoints: false,
  clickable: true,
  image: 'assets/images/dummy-tooth-rotate.png',
  oscillator: {
    gamma: 0.02,
    omega1: 15,
    amplitude: 3,
    timeOfVibrationEnd: 100,
  },
};

class DemoVibrate {
  constructor() {
    this.app = new Application();

    this.tooth = new Tooth(GLOBAL_OPTIONS);
    this.tooth.position(this.app.renderer.width / 2, this.app.renderer.height / 4);
    this.tooth.addToContainer(this.app.stage);

    this.app.ticker.add(() => this.tooth.render());
  }
}

export default DemoVibrate;

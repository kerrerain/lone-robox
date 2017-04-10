import { Application } from 'pixi.js';
import Tooth from '../comb/tooth';

const GLOBAL_OPTIONS = {
  points: 5,
  length: 80,
  displayPoints: true,
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
    this.tooth.strip.x = this.app.renderer.width / 2;
    this.tooth.strip.y = this.app.renderer.height / 4;
    this.tooth.skeleton.graphics.x = this.tooth.strip.x;
    this.tooth.skeleton.graphics.y = this.tooth.strip.y;

    this.app.stage.addChild(this.tooth.strip);

    if (GLOBAL_OPTIONS.displayPoints) {
      this.app.stage.addChild(this.tooth.skeleton.graphics);
    }

    this.app.ticker.add(() => this.animate());

    this.tooth.strip.interactive = true;
    this.tooth.strip.buttonMode = true;
    this.tooth.strip.on('pointerdown', () => this.onClick());
  }

  onClick() {
    this.tooth.triggerVibration();
  }

  animate() {
    this.tooth.render();
  }
}

export default DemoVibrate;

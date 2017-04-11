import { mesh, Texture } from 'pixi.js';
import ToothSkeleton from './tooth-skeleton';
import Oscillator from './oscillator';

class Tooth {
  constructor(options) {
    this.constructor.checkOptions(options);

    this.options = options;
    this.skeleton = new ToothSkeleton(options.points, options.length);
    this.strip = new mesh.Rope(Texture.fromImage(options.image), this.skeleton.points);
    this.oscillator = new Oscillator(options.oscillator);

    if (options.clickable) {
      this.activateClick();
    }
  }

  static checkOptions(options) {
    if (!options.image) {
      throw new Error('The image is missing.');
    }
  }

  addToContainer(container) {
    container.addChild(this.strip);

    if (this.options.displayPoints) {
      container.addChild(this.skeleton.graphics);
    }
  }

  position(x, y) {
    this.strip.x = x;
    this.strip.y = y;
    this.skeleton.position(x, y);
  }

  activateClick() {
    this.strip.interactive = true;
    this.strip.buttonMode = true;
    this.strip.on('pointerdown', () => this.oscillator.triggerVibration());
  }

  render() {
    const x = this.oscillator.run(1);
    this.skeleton.pointsPositionX(x);
    this.skeleton.render();
  }
}

export default Tooth;

import { mesh, loader } from 'pixi.js';
import ToothSkeleton from './tooth-skeleton';
import Oscillator from './oscillator';

class Tooth {
  constructor(options) {
    this.constructor.checkOptions(options);

    const totalLength = loader.resources.tooth.texture.width * options.tooth.scale;
    const pointLength = totalLength / (options.tooth.points - 1);

    this.options = options;
    this.skeleton = new ToothSkeleton(options.tooth.points, pointLength);
    this.strip = new mesh.Rope(loader.resources.tooth.texture, this.skeleton.points);
    this.oscillator = new Oscillator(options);

    if (options.tooth.clickable) {
      this.activateClick();
    }
  }

  static checkOptions(options) {
    if (!options.tooth.image) {
      throw new Error('The image is missing.');
    }
  }

  addToContainer(container) {
    container.addChild(this.strip);

    if (this.options.tooth.displayPoints) {
      container.addChild(this.skeleton.graphics);
    }
  }

  position(x, y) {
    this.strip.x = x;
    this.strip.y = y;
    this.skeleton.position(x, y);
  }

  positionX() {
    return this.strip.x;
  }

  width() {
    return this.strip.width;
  }

  height() {
    return this.strip.height;
  }

  scale(factor) {
    this.strip.scale.set(factor);
  }

  setWidth(width) {
    this.strip.width = width;
  }

  activateClick() {
    this.strip.interactive = true;
    this.strip.buttonMode = true;
    this.strip.on('pointerdown', () => this.triggerVibration());
  }

  triggerVibration() {
    this.oscillator.triggerVibration();
  }

  render() {
    const x = this.oscillator.run(1);
    this.skeleton.pointsPositionX(x);
    this.skeleton.render();
  }
}

export default Tooth;

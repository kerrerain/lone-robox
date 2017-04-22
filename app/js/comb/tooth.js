import { mesh, loader } from 'pixi.js';
import ToothSkeleton from './tooth-skeleton';
import Oscillator from './oscillator';

class Tooth {
  constructor(options) {
    this.constructor.checkOptions(options);

    const totalLength = loader.resources.tooth.texture.width * options.tooth.scale;
    const pointLength = totalLength / (options.tooth.points - 1);

    this.options = options;
    this.skeleton = new ToothSkeleton(options.tooth.points,
      pointLength, this.options.tooth.twistFactor);
    this.strip = new mesh.Rope(loader.resources.tooth.texture, this.skeleton.points);
    this.oscillator = new Oscillator(options);
    this.oscillator.onVibrationEnd(() => this.onVibrationEnd());
    this.offsetX = 0;
    this.twisted = false;

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

  triggerAnimation() {
    this.twisted = true;
  }

  triggerVibration() {
    this.twisted = false;
    this.offsetX = 0;
    this.oscillator.triggerVibration();
    this.strip.texture = loader.resources.toothActive.texture;
  }

  onVibrationEnd() {
    this.strip.texture = loader.resources.tooth.texture;
  }

  render() {
    if (this.twisted && this.offsetX < 10) {
      this.offsetX += 0.1;
    }
    this.renderSkeleton();
  }

  renderSkeleton() {
    const x = this.oscillator.run(1);
    this.skeleton.pointsPositionX(x - this.offsetX);
    this.skeleton.render();
  }

  reset() {
    this.oscillator.reset();
    this.twisted = false;
    this.offsetX = 0;
    this.renderSkeleton();
  }
}

export default Tooth;

import { Sprite, loader, Container } from 'pixi.js';
import TeethContainer from './teeth';
import PinsContainer from './pins';
import Cylinder from './cylinder';

class Graphics {
  constructor() {
    this.running = false;
    this.container = new Container();
  }

  loadOptions(options) {
    this.options = options;

    this.sprite = new Sprite(loader.resources[`${options.id}-comb`].texture);
    this.sprite.scale.set(options.comb.scale);

    this.cylinder = new Cylinder(options);
    this.teethContainer = this.createTeethContainer();
    this.pinsContainer = this.createPinsContainer();

    this.container.removeChildren();
    this.container.addChild(this.cylinder.container);
    this.container.addChild(this.pinsContainer.container);
    this.container.addChild(this.teethContainer.container);
    this.container.addChild(this.sprite);
  }

  availableSpaceForTeeth() {
    const width = this.sprite.width;
    const offsetXLeft = this.options.comb.teethOffsetXLeft * width;
    const offsetXRight = this.options.comb.teethOffsetXRight * width;
    return width - (offsetXLeft + offsetXRight);
  }

  createTeethContainer() {
    const container = new TeethContainer(this.options);
    container.size(this.availableSpaceForTeeth());
    return container;
  }

  createPinsContainer() {
    const container = new PinsContainer(this.options);
    container.size(this.availableSpaceForTeeth(), this.cylinder.container.height);
    return container;
  }

  position(x, y) {
    this.sprite.position.set(x, y);

    const width = this.sprite.width;
    const height = this.sprite.height;
    const offsetXLeft = this.options.comb.teethOffsetXLeft * width;
    const offsetYTop = this.options.comb.teethOffsetYTop * height;
    const positionX = x + offsetXLeft;
    const positionY = y + height + offsetYTop;

    this.teethContainer.position(positionX, positionY);
    this.cylinder.position(x, y + this.positionBottom());
    this.pinsContainer.position(positionX, this.cylinder.sprite.position.y);
  }

  positionBottom() {
    return this.container.position.y + this.container.height;
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  triggerAnimation(index) {
    this.teethContainer.triggerAnimation(index);
    this.pinsContainer.triggerAnimation(index);
  }

  triggerVibration(index) {
    this.teethContainer.triggerVibration(index);
  }

  render() {
    if (this.running) {
      this.pinsContainer.render();
      this.teethContainer.render();
    }
  }

  start() {
    this.running = true;
  }

  pause() {
    this.running = false;
  }

  reset() {
    this.teethContainer.reset();
    this.pinsContainer.reset();
  }
}

export default Graphics;

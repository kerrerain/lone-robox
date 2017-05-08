import { Container } from 'pixi.js';
import Pin from './pin';

class PinsContainer {
  constructor(options) {
    this.options = options;
    this.pinsBuffer = [];
    this.pinWidth = 0;
    this.pinHeight = 0;
    this.totalWidth = 0;
    this.totalHeight = 0;
    this.container = new Container();
  }

  position(x, y) {
    this.container.position.set(x, y);
  }

  size(width, height) {
    this.pinWidth = width / this.options.comb.teeth;
    this.pinHeight = this.pinWidth;
    this.totalWidth = width;
    this.totalHeight = height;
  }

  triggerAnimation(index) {
    const pin = new Pin(this.options, index * this.pinWidth, this.totalHeight);
    pin.addToContainer(this.container);
    pin.size(this.pinWidth, this.pinHeight);

    this.pinsBuffer.push(pin);
  }

  render() {
    let pinsToRemove = 0;

    this.pinsBuffer.forEach((pin) => {
      pin.rotate(this.options.cylinder.rotationSpeed);

      if (pin.angle > Math.PI) {
        this.container.removeChildAt(0);
        pinsToRemove += 1;
      }
    });

    this.pinsBuffer = this.pinsBuffer.slice(pinsToRemove, this.pinsBuffer.length);
  }

  reset() {
    this.container.removeChildren();
    this.pinsBuffer = [];
  }
}

export default PinsContainer;

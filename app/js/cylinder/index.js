import { Sprite, loader, Container } from 'pixi.js';
import Pin from './pin';

class Cylinder {
  constructor(options) {
    this.options = options;
    this.pinsBuffer = [];

    this.sprite = new Sprite(loader.resources.cylinder.texture);
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(options.cylinder.scale);

    this.pinsContainer = new Container();

    this.container = new Container();
    this.container.addChild(this.sprite);
    this.container.addChild(this.pinsContainer);
  }

  position(x, y) {
    this.sprite.position.set(x, y);
    this.pinsContainer.position.set(x - (this.sprite.width / 2.6), y - 5);
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  triggerAnimation(index) {
    const x = index * ((0.75 * this.sprite.width) / this.options.comb.teeth);
    const pin = new Pin(this.options);
    pin.position(x);

    pin.addToContainer(this.pinsContainer);
    this.pinsBuffer.push(pin);
  }

  render() {
    this.pinsBuffer.forEach((pin) => {
      pin.render();

      if (pin.angle > Math.PI) {
        this.pinsContainer.removeChildAt(0);
        this.pinsBuffer = this.pinsBuffer.slice(1, this.pinsContainer.children.length);
      }
    });
  }
}

export default Cylinder;

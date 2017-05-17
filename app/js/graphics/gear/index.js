import { Sprite, loader, Container } from 'pixi.js';

class Gear {
  constructor() {
    this.sprite = new Sprite(loader.resources.gear.texture);
    this.sprite.anchor.set(0.5);

    this.container = new Container();
    this.container.addChild(this.sprite);
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  position(x, y) {
    this.sprite.position.set(x, y);
  }

  rotate(delta) {
    this.sprite.rotation += 0.01 * delta;
  }
}

export default Gear;

import { Sprite, loader, Container } from 'pixi.js';

class Cylinder {
  constructor(options) {
    this.options = options;

    this.sprite = new Sprite(loader.resources[`${options.id}-cylinder`].texture);
    this.sprite.scale.set(options.cylinder.scale);

    this.container = new Container();
    this.container.addChild(this.sprite);
  }

  position(x, y) {
    const top = y + (this.options.cylinder.offsetYTop * this.sprite.height);
    this.sprite.position.set(x, top);
  }

  addToContainer(container) {
    container.addChild(this.container);
  }
}

export default Cylinder;

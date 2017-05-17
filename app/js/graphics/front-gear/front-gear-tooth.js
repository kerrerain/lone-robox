import { Sprite, loader } from 'pixi.js';

class FrontGearTooth {
  constructor() {
    this.sprite = new Sprite(loader.resources.frontGearTooth.texture);
    this.rotation = 0;
    this.baseHeight = this.sprite.height;
    this.containerHeight = 0;
  }

  addToContainer(container) {
    this.containerHeight = container.height;
    this.render();
    container.addChild(this.sprite);
  }

  position(x, y) {
    this.sprite.position.set(x, y);
  }

  rotate(delta) {
    this.rotation += 0.01 * delta;
    this.render();
  }

  render() {
    const height = this.containerHeight;
    const y = (0.5 * height) * (1 + Math.cos(this.rotation));

    this.sprite.position.set(0, y);
    this.sprite.visible = Math.sin(this.rotation) < 0;
    this.sprite.height = this.baseHeight *
      Math.abs(Math.sin(this.rotation));
  }
}

export default FrontGearTooth;

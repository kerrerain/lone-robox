import { Sprite, loader } from 'pixi.js';

class Button {
  constructor(texture) {
    this.button = new Sprite(loader.resources[texture].texture);
    this.button.anchor.set(0.5);
    this.button.interactive = true;
    this.button.buttonMode = true;
    this.button.on('pointerdown', () => {
      this.onClickCallback();
    });
  }

  position(x, y) {
    this.button.position.set(x, y);
  }

  onClick(cb) {
    this.onClickCallback = cb;
  }

  addToContainer(container) {
    container.addChild(this.button);
  }
}

export default Button;

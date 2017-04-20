import { Sprite, loader } from 'pixi.js';

class ToggleButton {
  constructor(textureOff, textureOn) {
    this.toggle = false;
    this.textureOff = loader.resources[textureOff].texture;
    this.textureOn = loader.resources[textureOn].texture;
    this.button = new Sprite(this.currentTexture());
    this.button.anchor.set(0.5);
    this.button.interactive = true;
    this.button.buttonMode = true;
    this.button.on('pointerdown', () => {
      this.toggle = !this.toggle;
      this.button.texture = this.currentTexture();
      this.onClickCallback(this.toggle);
    });
  }

  position(x, y) {
    this.button.position.set(x, y);
  }

  onClick(cb) {
    this.onClickCallback = cb;
  }

  currentTexture() {
    if (this.toggle) {
      return this.textureOn;
    }
    return this.textureOff;
  }

  addToContainer(container) {
    container.addChild(this.button);
  }
}

export default ToggleButton;

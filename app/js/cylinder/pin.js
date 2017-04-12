import { Sprite, Rectangle, Texture, loader } from 'pixi.js';
import PinFrame from './pin-frame';

class Pin {
  constructor(options) {
    this.options = options;
    this.angle = 0;
    this.frames = [];

    for (let i = 0; i < options.pin.frames; i += 1) {
      this.frames.push(new Texture(loader.resources.pin.texture,
        new Rectangle(i * this.options.pin.frameWidth,
          0, this.options.pin.frameWidth, this.options.pin.frameHeight)));
    }

    this.sprite = new Sprite(this.frames[0]);
  }

  addToContainer(container) {
    container.addChild(this.sprite);
  }

  position(x) {
    this.sprite.position.set(x, -1 * Math.cos(this.angle) * 80);
  }

  updateTexture(frameIndex) {
    this.sprite.texture = this.frames[frameIndex];
  }

  render() {
    this.angle += this.options.cylinder.rotationSpeed;
    this.position(this.sprite.position.x);
    this.updateTexture(PinFrame.currentFrameIndex(this.angle, this.options.pin.frames));
  }
}

export default Pin;

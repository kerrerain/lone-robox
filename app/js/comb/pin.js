import { Sprite, Rectangle, Texture, loader } from 'pixi.js';
import PinFrame from './pin-frame';

class Pin {
  constructor(options, x, height) {
    this.options = options;
    this.angle = 0;
    this.frames = [];
    this.originX = x;
    this.originHeight = height;

    for (let i = 0; i < options.pin.frames; i += 1) {
      this.frames.push(new Texture(loader.resources.pin.texture,
        new Rectangle(i * this.options.pin.frameWidth,
          0, this.options.pin.frameWidth, this.options.pin.frameHeight)));
    }

    this.sprite = new Sprite(this.frames[0]);
    this.sprite.anchor.set(0.5);
    this.updatePosition();
  }

  addToContainer(container) {
    container.addChild(this.sprite);
  }

  size(width, height) {
    this.sprite.width = width;
    this.sprite.height = height;
  }

  rotate(rotation) {
    this.angle += rotation;
    this.updatePosition();
    this.updateTexture(PinFrame.currentFrameTableIndex(this.angle, this.options.pin.framesTable));
  }

  updatePosition() {
    const y = (0.5 * this.originHeight) * (1 - Math.cos(this.angle));
    this.sprite.position.set(this.originX, y);
  }

  updateTexture(frameIndex) {
    this.sprite.texture = this.frames[frameIndex];
  }
}

export default Pin;

import { Sprite, loader, Container } from 'pixi.js';
import FrontGearTooth from './front-gear-tooth';

class FrontGear {
  constructor() {
    this.backgroundSprite = new Sprite(loader.resources.frontGearBackground.texture);

    this.container = new Container();
    this.container.addChild(this.backgroundSprite);

    this.teeth = [];
    for (let i = 0; i < 20; i += 1) {
      const tooth = new FrontGearTooth();
      tooth.rotation = 0.4 * i;
      tooth.addToContainer(this.container);

      this.teeth.push(tooth);
    }
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  position(x, y) {
    this.container.position.set(x, y);
  }

  rotate(delta) {
    this.teeth.forEach((tooth) => {
      tooth.rotate(delta);
    });
  }
}

export default FrontGear;

import { Sprite, loader, Container } from 'pixi.js';
import Tooth from './tooth';

class Comb {
  constructor(options) {
    this.teeth = [];

    for (let i = 0; i < options.comb.teeth; i += 1) {
      const tooth = new Tooth(options);
      this.teeth.push(tooth);
    }

    this.sprite = new Sprite(loader.resources.comb.texture);
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(options.comb.scale);

    this.teethContainer = new Container();
    this.teeth.forEach((tooth) => {
      tooth.addToContainer(this.teethContainer);
    });

    this.container = new Container();
    this.container.addChild(this.teethContainer);
    this.container.addChild(this.sprite);

    this.teeth.forEach((tooth) => {
      tooth.scale(options.comb.scale);
      tooth.setWidth((0.75 * this.sprite.width) / options.comb.teeth);
    });
  }

  position(x, y) {
    this.sprite.position.set(x, y);
    this.positionTeethContainer(x, y);
  }

  positionTeethContainer(x, y) {
    this.teethContainer.position.set(x - (this.sprite.width / 3), y);
    this.teeth.forEach((tooth, index) => {
      tooth.position((index * tooth.strip.width), 0);
    });
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  triggerAnimation(index) {
    this.teeth[index].triggerVibration();
  }

  render() {
    this.teeth.forEach((tooth) => {
      tooth.render();
    });
  }
}

export default Comb;

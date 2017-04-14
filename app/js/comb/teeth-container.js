import { Container } from 'pixi.js';
import Tooth from './tooth';

class TeethContainer {
  constructor(options) {
    this.options = options;
    this.container = new Container();
    this.teeth = [];

    for (let i = 0; i < options.comb.teeth; i += 1) {
      const tooth = new Tooth(options);
      this.teeth.push(tooth);
      tooth.addToContainer(this.container);
    }
  }

  position(x, y) {
    this.container.position.set(x, y);
    this.teeth.forEach((tooth, index) => {
      tooth.position((index * tooth.strip.width), 0);
    });
  }

  size(width) {
    this.teeth.forEach((tooth) => {
      tooth.setWidth(width / this.options.comb.teeth);
    });
  }

  triggerAnimation(index) {
    this.teeth[index].triggerAnimation();
  }

  render() {
    this.teeth.forEach((tooth) => {
      tooth.render();
    });
  }
}

export default TeethContainer;

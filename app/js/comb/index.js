import { Sprite, loader, Container } from 'pixi.js';
import TeethContainer from './teeth-container';

class Comb {
  constructor(options) {
    this.options = options;

    this.sprite = new Sprite(loader.resources.comb.texture);
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(options.comb.scale);

    this.teethContainer = this.createTeethContainer();

    this.container = new Container();
    this.container.addChild(this.teethContainer.container);
    this.container.addChild(this.sprite);
  }

  createTeethContainer() {
    const container = new TeethContainer(this.options, this.sprite.width, this.sprite.height);
    const width = this.sprite.width;
    const offsetXLeft = this.options.comb.teethOffsetXLeft * width;
    const offsetXRight = this.options.comb.teethOffsetXRight * width;
    const availableSpaceForTeeth = width - (offsetXLeft + offsetXRight);

    container.size(availableSpaceForTeeth);

    return container;
  }

  position(x, y) {
    this.sprite.position.set(x, y);

    const width = this.sprite.width;
    const height = this.sprite.height;
    const offsetXLeft = this.options.comb.teethOffsetXLeft * width;
    const offsetYTop = this.options.comb.teethOffsetYTop * height;
    const positionX = (x - (width / 2)) + offsetXLeft;
    const positionY = y + offsetYTop;

    this.teethContainer.position(positionX, positionY);
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  triggerAnimation(index) {
    this.teethContainer.triggerAnimation(index);
  }

  render() {
    this.teethContainer.render();
  }
}

export default Comb;

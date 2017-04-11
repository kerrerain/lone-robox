import { Application } from 'pixi.js';
import Box from '../box';
import DEFAULT_OPTIONS from '../default-options';

class DemoComb {
  constructor() {
    this.app = new Application();

    this.box = new Box(DEFAULT_OPTIONS);
    this.box.position(this.app.renderer.width / 2, this.app.renderer.height / 4);
    this.box.addToContainer(this.app.stage);

    this.app.ticker.add(() => this.box.render());
  }
}

export default DemoComb;

import { Application } from 'pixi.js';
import Box from '../box';
import DEFAULT_OPTIONS from '../default-options';
import AssetsLoader from '../assets-loader';

class DemoBox {
  constructor() {
    this.app = new Application();
    AssetsLoader.load(DEFAULT_OPTIONS, () => this.setup());
  }

  setup() {
    this.box = new Box(DEFAULT_OPTIONS);
    this.box.position(this.app.renderer.width / 4, 0);
    this.box.addToContainer(this.app.stage);

    this.app.ticker.add(() => this.box.render());
  }
}

export default DemoBox;

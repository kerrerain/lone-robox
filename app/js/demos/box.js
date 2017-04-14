import { Application } from 'pixi.js';
import Box from '../box';
import OPTIONS from '../custom-boxes/nyan';
import AssetsLoader from '../assets-loader';

class DemoBox {
  constructor() {
    this.app = new Application(800, 600, { backgroundColor: 0xffffff });
    AssetsLoader.load(OPTIONS, () => this.setup());
  }

  setup() {
    this.box = new Box(OPTIONS);
    this.box.position(this.app.renderer.width / 4, 0);
    this.box.addToContainer(this.app.stage);

    this.app.ticker.add(() => this.box.render());
  }
}

export default DemoBox;

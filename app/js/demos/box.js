import { Application } from 'pixi.js';
import Box from '../box';
import OPTIONS from '../custom-boxes/pink-panther';
import AssetsLoader from '../assets-loader';

class DemoBox {
  constructor() {
    this.app = new Application(800, 600, { backgroundColor: 0xffffff });
    this.app.renderer.view.style.position = 'absolute';
    this.app.renderer.view.style.display = 'block';
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    AssetsLoader.load(OPTIONS, () => this.setup());
  }

  setup() {
    this.box = new Box(OPTIONS, () => {
      this.box.position(0, 0);
      this.box.addToContainer(this.app.stage);
      this.app.ticker.add(() => this.box.render());
    });
  }
}

export default DemoBox;

import { Application } from 'pixi.js';
import Tooth from '../comb/tooth';
import DEFAULT_OPTIONS from '../default-options';
import AssetsLoader from '../assets-loader';

class DemoVibrate {
  constructor() {
    this.app = new Application();
    AssetsLoader.load(DEFAULT_OPTIONS, () => this.setup());
  }

  setup() {
    this.tooth = new Tooth(DEFAULT_OPTIONS);
    this.tooth.position(this.app.renderer.width / 2, this.app.renderer.height / 4);
    this.tooth.addToContainer(this.app.stage);

    this.app.ticker.add(() => this.tooth.render());
  }
}

export default DemoVibrate;

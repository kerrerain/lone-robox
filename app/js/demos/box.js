import { Application } from 'pixi.js';
import Box from '../box';
import OPTIONS from '../custom-boxes/nyan';
import AssetsLoader from '../assets-loader';
import ToggleButton from '../gui/toggle-button';

class DemoBox {
  constructor() {
    this.app = new Application(800, 600, { backgroundColor: 0xffffff });
    AssetsLoader.load(OPTIONS, () => this.setup());
  }

  setup() {
    this.box = new Box(OPTIONS, () => {
      this.box.position(this.app.renderer.width / 4, 0);
      this.box.addToContainer(this.app.stage);
      this.app.ticker.add(() => this.box.render());

      const button = new ToggleButton('buttonPlay', 'buttonStop');
      button.onClick((toggle) => {
        if (toggle) {
          this.box.start();
        } else {
          this.box.stop();
        }
      });
      button.position(this.app.renderer.width / 1.5, 40);
      button.addToContainer(this.app.stage);
    });
  }
}

export default DemoBox;

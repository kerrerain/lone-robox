import { Application } from 'pixi.js';
import Box from '../box';

class DemoBox {
  constructor(options) {
    this.app = new Application(800, 600, { backgroundColor: 0xffffff });
    this.app.renderer.view.style.position = 'absolute';
    this.app.renderer.view.style.display = 'block';
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    this.setup(options);
  }

  setup(options) {
    this.box = new Box(options, () => {
      this.box.position(0, 0);
      this.box.addToContainer(this.app.stage);
      this.app.ticker.add(() => this.box.render());
    });
  }

  changeBox(options) {
    this.app.ticker.stop();
    this.app.stage.removeChildren();

    this.box = new Box(options, () => {
      this.box.position(0, 0);
      this.box.addToContainer(this.app.stage);
      this.app.ticker.start();
    });
  }
}

export default DemoBox;

import { Application, loader, Sprite } from 'pixi.js';

class DemoDisplay {
  constructor() {
    this.app = new Application();

    loader
      .add('tooth', 'assets/images/dummy-tooth.png')
      .load(() => {
        this.setup();
      });
  }

  setup() {
    const tooth = new Sprite(loader.resources.tooth.texture);

    tooth.x = this.app.renderer.width / 2;
    tooth.y = this.app.renderer.height / 2;

    this.app.stage.addChild(tooth);
  }
}

export default DemoDisplay;

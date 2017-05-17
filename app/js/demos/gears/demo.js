import { Application } from 'pixi.js';
import Gear from '../../graphics/gear';
import FrontGear from '../../graphics/front-gear';

class Demo {
  constructor() {
    this.setupGraphics();
  }

  setupGraphics() {
    this.app = new Application(800, 600, { backgroundColor: 0xffffff });
    this.app.renderer.view.style.position = 'absolute';
    this.app.renderer.view.style.display = 'block';
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.frontGear = new FrontGear();
    this.frontGear.addToContainer(this.app.stage);
    this.frontGear.position(325, 20);

    this.gear = new Gear();
    this.gear.addToContainer(this.app.stage);
    this.gear.position(200, 200);

    this.app.ticker.add((delta) => {
      this.gear.rotate(delta);
      this.frontGear.rotate(delta);
    });
  }
}

export default Demo;

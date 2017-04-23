import { Application } from 'pixi.js';
import Box from '../box';
import OPTIONS from '../custom-boxes/pink-panther';
import AssetsLoader from '../assets-loader';
import ToggleButton from '../gui/toggle-button';
import Button from '../gui/button';

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
      this.box.position(this.app.renderer.width / 4, 0);
      this.box.addToContainer(this.app.stage);
      this.app.ticker.add(() => this.box.render());

      const playButton = new ToggleButton('buttonPlay', 'buttonPause');
      playButton.onClick((toggle) => {
        if (toggle) {
          this.box.start();
        } else {
          this.box.pause();
        }
      });
      playButton.position(200, 40);
      playButton.addToContainer(this.app.stage);

      const buttonStop = new Button('buttonStop');
      buttonStop.onClick(() => {
        this.box.stop();
        playButton.reset();
      });
      buttonStop.position(200, 120);
      buttonStop.addToContainer(this.app.stage);
    });
  }
}

export default DemoBox;

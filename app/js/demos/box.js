import { Application } from 'pixi.js';
import Box from '../box';
import OPTIONS from '../custom-boxes/nyan';
import AssetsLoader from '../assets-loader';
import ToggleButton from '../gui/toggle-button';
import Button from '../gui/button';

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

      const playButton = new ToggleButton('buttonPlay', 'buttonPause');
      playButton.onClick((toggle) => {
        if (toggle) {
          this.box.start();
        } else {
          this.box.pause();
        }
      });
      playButton.position(this.app.renderer.width / 1.5, 40);
      playButton.addToContainer(this.app.stage);

      const buttonStop = new Button('buttonStop');
      buttonStop.onClick(() => {
        this.box.stop();
        playButton.reset();
      });
      buttonStop.position(this.app.renderer.width / 1.5, 120);
      buttonStop.addToContainer(this.app.stage);
    });
  }
}

export default DemoBox;

import { mesh, Texture } from 'pixi.js';
import ToothSkeleton from './tooth-skeleton';
import Oscillator from './oscillator';

class Tooth {
  constructor(options) {
    // TODO @magleff Check mandatory options, write a test
    this.options = options;
    this.skeleton = new ToothSkeleton(options.points, options.length);
    this.strip = new mesh.Rope(Texture.fromImage('assets/images/dummy-tooth-rotate.png'), this.skeleton.points);
    this.oscillator = new Oscillator(options.oscillator);

    if (options.clickable) {
      this.activateClick();
    }
  }

  addToContainer(container) {
    container.addChild(this.strip);

    if (this.options.displayPoints) {
      container.addChild(this.skeleton.graphics);
    }
  }

  position(x, y) {
    this.strip.x = x;
    this.strip.y = y;
    this.skeleton.graphics.x = x;
    this.skeleton.graphics.y = y;
  }

  activateClick() {
    this.strip.interactive = true;
    this.strip.buttonMode = true;
    this.strip.on('pointerdown', () => this.oscillator.triggerVibration());
  }

  render() {
    const position = this.oscillator.run(1);

    for (let i = 0; i < this.skeleton.points.length; i += 1) {
      this.skeleton.points[i].x = i * position;
    }

    this.skeleton.render();
  }
}

export default Tooth;

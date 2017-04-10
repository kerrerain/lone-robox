import { Point, mesh, Texture } from 'pixi.js';
import ToothSkeleton from './tooth-skeleton';
import Oscillator from './oscillator';

class Tooth {
  constructor(options) {
    this.points = [];

    for (let i = 0; i < options.points; i += 1) {
      this.points.push(new Point(0, i * options.length));
    }

    this.strip = new mesh.Rope(Texture.fromImage('assets/images/dummy-tooth-rotate.png'), this.points);
    this.skeleton = new ToothSkeleton(this.points);
    this.oscillator = new Oscillator(options.oscillator);
  }

  triggerVibration() {
    this.oscillator.triggerVibration();
  }

  render() {
    const position = this.oscillator.run(1);

    for (let i = 0; i < this.points.length; i += 1) {
      this.points[i].x = i * position;
    }

    this.skeleton.render();
  }
}

export default Tooth;

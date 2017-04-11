import { Application } from 'pixi.js';
import Comb from '../comb';
import DEFAULT_OPTIONS from '../default-options';

class DemoComb {
  constructor() {
    this.app = new Application();

    this.comb = new Comb(DEFAULT_OPTIONS);
    this.comb.position(this.app.renderer.width / 2, this.app.renderer.height / 4);
    this.comb.addToContainer(this.app.stage);

    this.app.ticker.add(() => this.comb.render());
  }
}

export default DemoComb;

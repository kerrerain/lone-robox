import Tooth from './tooth';

class Comb {
  constructor(options) {
    this.teeth = [];

    for (let i = 0; i < options.comb.teeth; i += 1) {
      const tooth = new Tooth(options);
      this.teeth.push(tooth);
    }
  }

  position(x, y) {
    this.teeth.forEach((tooth, index) => {
      tooth.position(x + (index * 80), y);
    });
  }

  addToContainer(container) {
    this.teeth.forEach((tooth) => {
      tooth.addToContainer(container);
    });
  }

  triggerAnimation(index) {
    this.teeth[index].triggerVibration();
  }

  render() {
    this.teeth.forEach((tooth) => {
      tooth.render();
    });
  }
}

export default Comb;

import { Application, Point, mesh, Texture, Graphics } from 'pixi.js';

const GLOBAL_OPTIONS = {
  points: 5,
  length: 80,
  displayPoints: true,
  oscillator: {
    gamma: 0.02,
    omega1: 15,
    amplitude: 3,
    timeOfVibrationEnd: 100,
  },
};

class Oscillator {
  constructor(options) {
    this.options = options;
    this.position = 0;
    this.vibrating = false;
    this.timeOfVibration = 0;
  }

  triggerVibration() {
    this.vibrating = true;
    this.timeOfVibration = 0;
  }

  run(time) {
    if (this.vibrating) {
      this.timeOfVibration += time;
      this.position = this.computePosition(this.timeOfVibration);
    }

    if (this.timeOfVibration > this.options.timeOfVibrationEnd) {
      this.vibrating = false;
      this.timeOfVibration = 0;
      this.position = 0;
    }

    return this.position;
  }

  computePosition(t) {
    // Equation of a damped harmonic oscillator
    return Math.exp(-this.options.gamma * t) *
      this.options.amplitude *
      Math.cos(this.options.omega1 * t);
  }
}

class Tooth {
  constructor(options) {
    this.points = [];

    for (let i = 0; i < options.points; i += 1) {
      this.points.push(new Point(0, i * options.length));
    }

    this.strip = new mesh.Rope(Texture.fromImage('assets/images/dummy-tooth-rotate.png'), this.points);
    this.pointsGraphics = new Graphics();
  }

  renderPoints() {
    const g = this.pointsGraphics;
    g.clear();

    g.lineStyle(2, 0xffc2c2);
    g.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 1; i < this.points.length; i += 1) {
      g.lineTo(this.points[i].x, this.points[i].y);
    }

    for (let i = 1; i < this.points.length; i += 1) {
      g.beginFill(0xff0022);
      g.drawCircle(this.points[i].x, this.points[i].y, 10);
      g.endFill();
    }
  }
}

class DemoVibrate {
  constructor() {
    this.app = new Application();
    this.tooth = new Tooth(GLOBAL_OPTIONS);
    this.tooth.strip.x = this.app.renderer.width / 2;
    this.tooth.strip.y = this.app.renderer.height / 4;
    this.tooth.pointsGraphics.x = this.tooth.strip.x;
    this.tooth.pointsGraphics.y = this.tooth.strip.y;
    this.count = 0;

    this.oscillator = new Oscillator(GLOBAL_OPTIONS.oscillator);

    this.app.stage.addChild(this.tooth.strip);

    if (GLOBAL_OPTIONS.displayPoints) {
      this.app.stage.addChild(this.tooth.pointsGraphics);
    }

    this.app.ticker.add(() => this.animate());

    this.tooth.strip.interactive = true;
    this.tooth.strip.buttonMode = true;
    this.tooth.strip.on('pointerdown', () => this.onClick());
  }

  onClick() {
    this.oscillator.triggerVibration();
  }

  animate() {
    const position = this.oscillator.run(1);

    for (let i = 0; i < this.tooth.points.length; i += 1) {
      this.tooth.points[i].x = i * position;
    }

    this.tooth.renderPoints();
  }
}

export default DemoVibrate;

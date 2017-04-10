import { Graphics } from 'pixi.js';

class ToothSkeleton {
  constructor(points) {
    this.graphics = new Graphics();
    this.points = points;
  }

  render() {
    const g = this.graphics;

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

export default ToothSkeleton;
